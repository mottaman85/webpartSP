declare interface IHolaMundoWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  name: string;
  visible: string;
  subtitle: string;
}

declare module 'HolaMundoWebPartStrings' {
  const strings: IHolaMundoWebPartStrings;
  export = strings;
}
