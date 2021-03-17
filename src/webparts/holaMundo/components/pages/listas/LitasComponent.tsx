/**
 * 
 * @author Equipo de desarrollo de RAGASA
 * @description 
 * 
 */
import * as React from 'react';
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { 
    PrimaryButton, 
    } from 'office-ui-fabric-react';


import Layout from '../../Template/Layout';
import SPListServices from '../../Services/SPListServices'
import ItemListSP from '../../listaSP/ItemListSP'
import { ISPList } from '../../models/ISPList'
import { IListadoProps } from './IListadoProps'
import { IListadoState } from './IListadoState'


export class ListaPage extends React.Component<IListadoProps, IListadoState> {

  private serviceSP:SPListServices;
  OriginalItems: any[];

  constructor(props: IListadoProps, state: IListadoState){
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

  public render(): React.ReactElement<IListadoProps> {        
    return <Layout
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