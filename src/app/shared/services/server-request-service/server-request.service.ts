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


  auth(url:string, body:object):Observable<any>{
    console.log("login endpoint hit...")
    return this.http.post(this.baseUrl + url, body)
   }

  post(url:string, body:object):Observable<any>{
    console.log("post request hit")
    // let authToken = this.storage.getStoredData("")
    this.token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYWtlZW10dW5kZTJAZ21haWwuY29tIiwiaWF0IjoxNzA1NDU4NTQ4LCJleHAiOjE3MDU5ODQxNDh9.Vs0sn1vMs20H9cH1qVi9JM7wLi7S1HwB16rYOjj07b0"
    // console.log(authToken)


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

