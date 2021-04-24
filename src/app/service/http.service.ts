import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http:HttpClient,

  ) { }

  public ejecutarQuery<T>(query:string){
    query = apiUrl+query;
    return this.http.get<T>(query);
  }

  public postejecutarQuery<T>(query:string,object:any){
    query = apiUrl+query;
    return this.http.post<T>(query,object);
  }


}
