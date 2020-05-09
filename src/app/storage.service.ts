import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'; 
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage, public global: GlobalService) { }

  setItem(item, value): Promise<any> {

    return this.storage.set(item, value);
  }

  getItem(item){

    return new Promise ( (resolve, reject) => {
      this.storage.get(item).then( (val) => {
        resolve(val);
      })
    });
  }

  async fetch(item) {

    let value = await this.getItem(item);
  
    this.global.stage = value;
  }
}
