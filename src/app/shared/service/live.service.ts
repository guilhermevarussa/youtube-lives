import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl='http//localhost8080/lives';
  
  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'apllication/json'
    })
  };

  constructor( 
    private httpClient:HttpClient) { }



    getLiveWithFlag(flag:string):Observable<Response>{
      return this.httpClient.get<Response>(this.apiUrl+'?flag='+flag)
    }

}

