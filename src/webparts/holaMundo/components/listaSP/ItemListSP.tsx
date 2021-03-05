import * as React from 'react'
import IItemListProps from './IItemListProps' 
import { ISPList} from '../models/ISPList';
import styles from '../HolaMundo.module.scss';
import { List } from 'office-ui-fabric-react/lib/List';
import { ITheme, mergeStyleSets, getTheme, getFocusStyle } from 'office-ui-fabric-react/lib/Styling';
import { createListItems, IExampleItem, TestImages } from '@uifabric/example-data';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { getRTL } from 'office-ui-fabric-react/lib/Utilities';
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { useConst } from '@uifabric/react-hooks';


const theme: ITheme = getTheme();
const { palette, semanticColors, fonts } = theme;

const classNames = mergeStyleSets({
    itemCell: [
      getFocusStyle(theme, { inset: -1 }),
      {
        minHeight: 54,
        padding: 10,
        boxSizing: 'border-box',
        borderBottom: `1px solid ${semanticColors.bodyDivider}`,
        display: 'flex',
        selectors: {
          '&:hover': { background: palette.neutralLight },
        },
      },
    ],
    itemImage: {
      flexShrink: 0,
    },
    itemContent: {
      marginLeft: 10,
      overflow: 'hidden',
      flexGrow: 1,
    },
    itemName: [
      fonts.xLarge,
      {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    ],
    itemIndex: {
      fontSize: fonts.small.fontSize,
      color: palette.neutralTertiary,
      marginBottom: 10,
    },
    chevron: {
      alignSelf: 'center',
      marginLeft: 10,
      color: palette.neutralTertiary,
      fontSize: fonts.large.fontSize,
      flexShrink: 0,
    },
  });

  const txtDescr="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"

const onRenderCell = (item: ISPList, index: number | undefined): JSX.Element => {
    return (
      <div className={classNames.itemCell} data-is-focusable={true}>
        <Image className={classNames.itemImage} src={TestImages.personaFemale} width={50} height={50} imageFit={ImageFit.cover} />
        <div className={classNames.itemContent}>
          <div className={classNames.itemName}>{item.Title}</div>
          <div className={classNames.itemIndex}>{`Item ${index}`}</div>
          <div>{txtDescr}</div>
        </div>
        <Icon className={classNames.chevron} iconName={getRTL() ? 'ChevronLeft' : 'ChevronRight'} />
      </div>
    );
  };
  
  
class ItemsStateLst {
    items: any[]
}

export default class ItemListSP extends React.Component<IItemListProps,ItemsStateLst>{
    

    constructor(props:IItemListProps, state:ItemsStateLst){
        super(props);   
        

    }

    onFilterChanged = (_: any, text: string): void => {
        this.props.items.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) >= 0);
    };
    
    public render(): React.ReactElement<IItemListProps>{

        const lista = this.props.items.map(
            (itm: ISPList, i:number) => {
              return(
                  
                <ul className={styles.list}>
                  <li className={styles.listItem}>{itm.Title}</li>
                </ul>
              )
            }
          )

        return (
          <div> 
            <FocusZone direction={FocusZoneDirection.vertical}>
                <TextField
                    label={'Filter by name'}
                    // eslint-disable-next-line react/jsx-no-bind                    
                />
                <List items={this.props.items} onRenderCell={onRenderCell}/>
            </FocusZone>
          </div>
        );
    }

}