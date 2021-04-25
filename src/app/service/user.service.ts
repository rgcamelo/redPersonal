import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchResponseObject } from '../interfaces/searchResponse.interface';
import { UserObject } from '../interfaces/user.interface';
import { Follow } from '../models/follow.class';
import { UserClassObject } from '../models/user.class';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  sub = new Subject<any>();

  constructor(private http:HttpService) { }

  postUser(user:UserClassObject){
    return this.http.postejecutarQuery(`users`,user);
  }

  getUsers(){
    return this.http.ejecutarQuery<UserObject[]>(`users`);
  }

  getUser(id:string){
    return this.http.ejecutarQuery<UserObject>(`users/${id}`);
  }

  subsUser(follow:Follow){
    return this.http.postejecutarQuery(`users/follow`,follow);
  }

  searchUser(buscar:string){
    return this.http.ejecutarQuery<SearchResponseObject[]>(`search?text=${buscar}`);
  }

  obtenerSub(){
    return this.sub.asObservable();
  }
}
