import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  storedData:any;
  constructor() { }

  saveItem(itemName: string, item: any){
    localStorage.setItem(itemName, item)
  }

  saveItemObject(itemName:string, item:object){
        localStorage.setItem(itemName, JSON.stringify(item))
        console.log("Item stored")
     }


  removeItem(itemName: string){
    console.log("removing item")
    localStorage.removeItem(itemName)
    console.log("item removed")
}

  getStoredData(itemName: string){
    console.log("getting stored data")
    this.storedData= localStorage.getItem(itemName);
    return JSON.parse(this.storedData)
  }

  
}

