import * as React from 'react'
import { ISPList} from '../../models/ISPList';
import { ITheme, mergeStyleSets, getTheme, getFocusStyle } from 'office-ui-fabric-react/lib/Styling';
import { TestImages } from '@uifabric/example-data';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { getRTL } from 'office-ui-fabric-react/lib/Utilities';


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


  export const RenderCellStyleOne = (item: ISPList, index: number | undefined): JSX.Element => {
    return (
      <div className={classNames.itemCell} data-is-focusable={true}>
        <Image className={classNames.itemImage} src={TestImages.personaFemale} width={50} height={50} imageFit={ImageFit.cover} />
        <div className={classNames.itemContent}>
          <div className={classNames.itemName}>{item.Title}</div>
          <div className={classNames.itemIndex}>{`Item ${index}`}</div>
          <div>{item.Description}</div>
        </div>
        <Icon className={classNames.chevron} iconName={getRTL() ? 'ChevronLeft' : 'ChevronRight'} />
      </div>
    );
  };
  