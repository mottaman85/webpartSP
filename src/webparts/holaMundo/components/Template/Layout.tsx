import * as React from 'react'
import { IHolaMundoProps } from '../IHolaMundoProps';
import styles from '../HolaMundo.module.scss';

class ItemsStateLst {
    items: any[]
}

export default class Layout extends React.Component<IHolaMundoProps,{}>{
    
    public render(): React.ReactElement<IHolaMundoProps>{
        return (
            <div className={ styles.holaMundo }>
            <div className={ styles.container }>
              <div className={ styles.row }>
                <div className={ styles.column }>
                  <span className={ styles.title }> {this.props.name} !</span>
                  <p className={ styles.title }> Ambiente actual: {this.props.status} </p>
                  <a href="https://aka.ms/spfx" className={ styles.button }>
                    <span className={ styles.label }>Learn more</span>
                  </a>
                </div>
              </div>          
                {this.props.children}
            </div>
          </div>
        );
    }
}