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
import SPListServices from './Services/SPListServices'

import { ImageIcon } from 'office-ui-fabric-react/lib/Icon';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { TestImages } from '@uifabric/example-data';
import { css } from 'office-ui-fabric-react/lib/Utilities';
import ItemListSP from './listaSP/ItemListSP'

import { 
  DefaultButton, 
  PrimaryButton, 
  Stack, 
  IStackTokens, 
  IContextualMenuProps, 
  IIconProps,
  IconButton} from 'office-ui-fabric-react';

const menuProps: IContextualMenuProps = {
  items: [
    {
      key: 'emailMessage',
      text: 'Email message',
      iconProps: { iconName: 'Mail' },
    },
    {
      key: 'calendarEvent',
      text: 'Calendar event',
      iconProps: { iconName: 'Accounts' },
    },
  ],
};

const classNames = mergeStyleSets({
  image: {
    display: 'inline-block',
    position: 'relative',
  },
  one: {
    width: 48,
    height: 44,
    marginLeft: 27,
  },
  oneImage: {
    left: -6,
    top: -4,
  },
  check: {
    width: 35,
    height: 43,
    marginLeft: 55,
  },
  checkImage: {
    left: -60,
    top: -5,
  },
  lock: {
    width: 35,
    height: 42,
    marginLeft: 65,
  },
  lockImage: {
    width: -109,
    top: -5,
  },
});

const emojiIcon: IIconProps = { iconName: 'Emoji2' };

export default class HolaMundo extends React.Component<IHolaMundoProps, IHolaMundoState> {
  
  private serviceSP:SPListServices;

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
  

  public render(): React.ReactElement<IHolaMundoProps> {        
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

          <ImageIcon
            className={classNames.one}
            imageProps={{
              src: TestImages.iconOne,
              className: css(classNames.image, classNames.oneImage),
            }}
            onClick={this._onalert}
            
          />
          <IconButton iconProps={emojiIcon} title="Emoji" ariaLabel="Emoji" disabled={false} checked={false} />
          <DefaultButton text="Boton 1" ></DefaultButton>
          <PrimaryButton
            text="Primary"
            primary
            split
            splitButtonAriaLabel="See 2 options"
            aria-roledescription="split button"
            menuProps={menuProps}
            onClick={this._onalert}
           // onClick={_alertClicked}
            disabled={ false }
           // checked={checked}
          />
          <ItemListSP 
            items={this.state.items}
          />
        </div>
      </div>
    );
  }


  private _onalert(){
    alert('clicked');
  }


  public componentDidMount(){
    console.log('mounted....')
    this._getList();  
  }

  private _getList():void{

    this.serviceSP.getSPListAll()
      .then((response) => {
        let items:any = [];        
        response.value.forEach((item: ISPList) => {
          items.push(item);
        });
          this.setState({'status': 'Loaded', 'items': items})
      })
    
  }

}
