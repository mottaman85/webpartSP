/**
 * 
 * @author Equipo de desarrollo de RAGASA
 * @description 
 * 
 */
import * as React from 'react';
import { Nav, INavState, INavStyles, INavLinkGroup, DefaultPalette} from 'office-ui-fabric-react'
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { HashRouter, Route } from "react-router-dom";
import styles from './HolaMundo.module.scss'
//LIBRERIAS DEL PROYECTOS. 

import { IHolaMundoProps } from './IHolaMundoProps';
import { IHolaMundoState } from './IHolaMundoState'


import { 
    HomePage,  
    ListaPage
  } from './pages'

//TERMIAN IMPORTS 


const navStyles: Partial<INavStyles> = { root: { width: 150, color: DefaultPalette.green} };
const stackTokens: IStackTokens = { childrenGap: 10 };
const navLinkGroups: INavLinkGroup[] = [
  {
    name: "Menu",
    links: [
      {
        name: 'Home',
        key: 'home',
        url: '#/'
      },
      {
        name: 'Listas Sharepoint',
        key: 'Listas',
        url: '#/listas'
      }
    ]
  }
]

export default class HolaMundo extends React.Component<IHolaMundoProps, IHolaMundoState> {
    
  public render(){
    return  <div className={ styles.holaMundo }>
              <Stack horizontal tokens={stackTokens}>
                  <Nav styles={navStyles} ariaLabel="Menu de componentes" groups={navLinkGroups} />
                  <HashRouter>
                    <Route path="/" exact component={ HomePage }></Route>
                    <Route path="/listas" component={() => <ListaPage 
                      description="" sPHttpClient = {this.props.sPHttpClient}                      
                    ></ListaPage> }></Route>
                  </HashRouter>
              </Stack>
            </div>
  }
 

}
