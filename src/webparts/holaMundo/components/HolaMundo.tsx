import * as React from 'react';
import styles from './HolaMundo.module.scss';
import { IHolaMundoProps } from './IHolaMundoProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { 
  Environment,
  EnvironmentType
 } from '@microsoft/sp-core-library';

import { ISPList } from './models/ISPList'
import MockSPList from './Services/MockList'
import {
  SPHttpClient,
  SPHttpClientResponse
} from '@microsoft/sp-http';

import { IHolaMundoState } from './IHolaMundoState'

export default class HolaMundo extends React.Component<IHolaMundoProps, IHolaMundoState> {
  
  constructor(props: IHolaMundoProps, state: IHolaMundoState){
    super(props);

    this.state = {
      status: 'Ready',
      items: []
    }

  }

  public render(): React.ReactElement<IHolaMundoProps> {

    const testEnv = Environment.type == EnvironmentType.Local ? "Local" : "SharepointOnline";


    return (
      <div className={ styles.holaMundo }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }> {this.props.string.name} !</span>
              <p className={ styles.subTitle }>{this.props.subtitle}.</p>
              <p className={ styles.title }> Ambiente actual: {this.state.status} </p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <p hidden={!this.props.visible} className={ styles.description }> test - {escape(this.props.name)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  public componentDidMount(){
    console.log('mounted....')
    this._getList();  
  }

  private _getList(): Promise<ISPList>{
    if(Environment.type == EnvironmentType.Local){
    
      MockSPList.get()
        .then((response) => {
          this.setState({'status': 'Cargado en local'})
        })
    }else if (EnvironmentType.SharePoint == Environment.type ){

      this.props.sPHttpClient.get(this.props.urlAbs + `/_api/web/lists?$filter=Hidden eq false`, SPHttpClient.configurations.v1)
        .then((response: SPHttpClientResponse) => {
          this.setState({'status': 'Cargado en Sharepoint' + response.json() })
        });    

    }
    return null;
  }

}
