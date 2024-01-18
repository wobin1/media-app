import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../local-storage-service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {

  baseUrl="http://20.0.88.161:8080/onboarding/api/v1/";
  token:any;

  constructor(public http: HttpClient, private storage: StorageService) { }

  ngOnInit(){
    

  }

  get_token(){
    let authToken = this.storage.getStoredData("finremit")
    this.token = authToken.token
  }


  auth(url:string, body:object):Observable<any>{
    return this.http.post(this.baseUrl + url, body)
   }

  post(url:string, body:object):Observable<any>{
    this.get_token()

    return this.http.post(this.baseUrl + url, body, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token, 
      })
    },)
   }
 
   get(url:string):Observable<any>{
    this.get_token()
     return this.http.get(this.baseUrl + url, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token, 
      })
    },)
     
   }
 
 
   put(url:string, body:object):Observable<any>{
    this.get_token()
     return this.http.put(this.baseUrl + url, body, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token, 
      })
    },)
   }
 
   delete(url:string):Observable<any>{
    this.get_token()
     return this.http.delete(this.baseUrl + url, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token, 
      })
    },)
   }

  
}

