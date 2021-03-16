import * as React from 'react';
import { IHolaMundoProps } from './IHolaMundoProps';
import { escape, times } from '@microsoft/sp-lodash-subset';
import { ISPList } from './models/ISPList'
import { IHolaMundoState } from './IHolaMundoState'
import SPListServices from './Services/SPListServices'
import ItemListSP from './listaSP/ItemListSP'
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import Layout from './Template/Layout';

import { 
  PrimaryButton, 
  } from 'office-ui-fabric-react';


export default class HolaMundo extends React.Component<IHolaMundoProps, IHolaMundoState> {
  
  private serviceSP:SPListServices;
  OriginalItems: any[];

  constructor(props: IHolaMundoProps, state: IHolaMundoState){
    super(props);

    this.state = {
      status: 'Ready',
      items: []
    }

    this.serviceSP = new SPListServices(
      this.props.sPHttpClient,
      this.props.urlAbs
    );

  }

  onFilterChanged = (_: any, text: string): void => {
    let result = this.OriginalItems.filter(item => item.Title.toLowerCase().indexOf(text.toLowerCase()) >= 0);
    this.setState({items: result});
  };
  
  loadList = (): void => {
    this._getList();
  }

  public render(): React.ReactElement<IHolaMundoProps> {        
    return (
      <Layout
        status={this.state.status}
        description={this.props.description}
        name={this.props.name}
>       
        <PrimaryButton
          text="Carga Lista"
          primary
          split            
          onClick={this.loadList}
          disabled={ false }
        />
        <FocusZone direction={FocusZoneDirection.vertical}>         
          <TextField
                    label={'Filter by name'}
                    onChange={this.onFilterChanged}
                />
          <ItemListSP 
            items={this.state.items}
          />
        </FocusZone>
        </Layout>
    );
  }


  public componentDidMount(){
    this._getList();  
  }

  private _getList():void{

    this.serviceSP.getSPListAll()
      .then((response) => {
        this.OriginalItems = [];
        response.value.forEach((item: ISPList) => {
          this.OriginalItems.push(item);
        });
          this.setState({'status': 'Loaded', 'items': this.OriginalItems})
      })
    
  }

}
