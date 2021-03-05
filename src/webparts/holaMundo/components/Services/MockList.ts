import { ISPList, ISPLists } from '../models/ISPList'

export default class MockSPList {
    
    private static _items: ISPList[] = [
        {Title: 'Elemento de la lista 1', Id: '1'},
        {Title: 'Elemento de la lista 2', Id: '2'},
        {Title: 'Elemento de la lista 3', Id: '3'}
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