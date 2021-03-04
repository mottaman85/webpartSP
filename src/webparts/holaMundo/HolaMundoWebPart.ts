import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneCheckbox,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'HolaMundoWebPartStrings';
import HolaMundo from './components/HolaMundo';
import { IHolaMundoProps } from './components/IHolaMundoProps';

export interface IHolaMundoWebPartProps {
  description: string;
  name: string;
  visible: boolean; 
}

export default class HolaMundoWebPart extends BaseClientSideWebPart<IHolaMundoWebPartProps> {
 


 public render(): void {
    const element: React.ReactElement<IHolaMundoProps> = React.createElement(
      HolaMundo,
      {
        description: this.properties.description,
        name: this.properties.name,
        visible: this.properties.visible,
        subtitle: strings.subtitle,
        string: strings,
        sPHttpClient: this.context.spHttpClient,
        urlAbs: this.context.pageContext.web.absoluteUrl
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('name', {
                  label: strings.name,
                  multiline: true
                }),
                PropertyPaneCheckbox('visible', {
                  text: strings.visible,
                  checked: true
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
