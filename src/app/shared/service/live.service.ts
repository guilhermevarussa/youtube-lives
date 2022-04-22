import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../model/response-model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl='http://localhost8080/lives';
  
  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'apllication/json'
    })
  };

  constructor( 
    private httpClient:HttpClient) { }



    getLiveWithFlag(flag:string):Observable<ResponseModel>{
      return this.httpClient.get<ResponseModel>(this.apiUrl+'?flag='+flag)
    }

}




