import * as React from 'react'
import IItemListProps from './IItemListProps' 
import { List } from 'office-ui-fabric-react/lib/List';
import { RenderCellStyleSimple, RenderCellStyleOne } from './CellStyles';

class ItemsStateLst {
    items: any[]
}

export default class ItemListSP extends React.Component<IItemListProps,ItemsStateLst>{
    

    constructor(props:IItemListProps, state:ItemsStateLst){
        super(props);   
    }    
    
    public render(): React.ReactElement<IItemListProps>{
        return (
          <div>                 
            <List items={this.props.items} onRenderCell={ RenderCellStyleOne }/>
          </div>
        );
    }
}