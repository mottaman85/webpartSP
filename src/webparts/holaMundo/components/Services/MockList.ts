import { ISPList, ISPLists } from '../models/ISPList'

export default class MockSPList {
    
    private static _items: ISPList[] = [
        
        {Title: 'Cursos de capacitacion', Id: '1', Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit', ImageUrl:"https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-male.png"},
        {Title: 'Libros de react', Id: '2', Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit', ImageUrl:"https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-male.png"},
        {Title: 'Personal Autorizado', Id: '3', Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit', ImageUrl:"https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-male.png"},
        {Title: 'Recursos Humanos', Id: '4', Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit', ImageUrl:"https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-male.png"},
        {Title: 'Libros de Angular', Id: '5', Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit', ImageUrl:"https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-male.png"},
        {Title: 'Libros de Sharepoint', Id: '6', Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit', ImageUrl:"https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-male.png"},
        {Title: 'Cursos en linea', Id: '7', Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit', ImageUrl:"https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-male.png"}

    ]

    private static get(): Promise<ISPList[]> {
        return new Promise<ISPList[]>((resolve) => 
        {
            resolve(MockSPList._items);
        }
        )
    }

    public static getSPListFromLocal(): Promise<ISPLists>{
        return this.get()
            .then(
                (data: ISPList[]) => {
                    var listData: ISPLists = {value: data};
                    return listData;
                }

            )as Promise<ISPLists>
    }


}