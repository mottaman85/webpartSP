import MockSPList from './MockList';
import {
    SPHttpClient,
    SPHttpClientResponse
 } from '@microsoft/sp-http'
import {
    Environment,
    EnvironmentType
} from '@microsoft/sp-core-library'
import { ISPLists } from '../models/ISPList';


export default class SPListService{

    private urlBase:string;
    private sPHttpClient:SPHttpClient;

    constructor(sPHttpClient:SPHttpClient, urlBase:string){
        this.sPHttpClient = sPHttpClient;
        this.urlBase = urlBase;
    }

    public getSPListAll():Promise<ISPLists>{
        switch(Environment.type){
            case(EnvironmentType.Local):
                return MockSPList.getSPListFromLocal();
            case(EnvironmentType.SharePoint):
                return this.getListFromSP();
        }
    }

    private getListFromSP():Promise<ISPLists>{
        return this.sPHttpClient.get(this.urlBase + `/_api/web/lists?$filter=Hidden eq false`, SPHttpClient.configurations.v1)
            .then((response: SPHttpClientResponse) => {
                return response.json();
            }
        )
    }

}