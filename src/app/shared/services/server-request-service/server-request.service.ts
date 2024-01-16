import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../local-storage-service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {

  baseUrl="https://backend.ischools.ng/api/";
  token:any;

  constructor(public http: HttpClient, private storage: StorageService) { }

  ngOnInit(){
    

  }


  auth(url:string, body:object):Observable<any>{
    console.log("login endpoint hit...")
    return this.http.post(this.baseUrl + url, body)
   }

  post(url:string, body:object):Observable<any>{

    let authToken = this.storage.getStoredData("ischoolUser")
    this.token = authToken.access_token
    console.log(authToken)


    return this.http.post(this.baseUrl + url, body, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token, 
      })
    },)
   }
 
   get(url:string):Observable<any>{
     return this.http.get(this.baseUrl + url)
   }
 
 
   put(url:string, body:object):Observable<any>{
     return this.http.put(this.baseUrl + url, body)
   }
 
   delete(url:string):Observable<any>{
     return this.http.delete(this.baseUrl + url)
   }

  
}

