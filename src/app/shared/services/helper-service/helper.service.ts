import { Injectable } from '@angular/core';
import { StorageService } from '../local-storage-service/storage.service';
import { ServerRequestService } from '../server-request-service/server-request.service';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private storage: StorageService,
              private api: ServerRequestService) { }

  get_token(){
    let stored_data = this.storage.getStoredData('ischoolUser')

    console.log(stored_data)

    return stored_data.access_token
  }

  getSchoolId(){
    let stored_data = this.storage.getStoredData('ischoolUser')
    console.log(stored_data)

    if(stored_data == null){
      return "Authentication is required"
    }else{
      return stored_data.data.id
    }

    
  }


  getRequest(uri:any){
    let response = this.api.get(uri).subscribe(
      res=>{
        let response = res;
        
      },
      err=>{
        console.log(err)
      }
    )
    return response
  }

  

}
