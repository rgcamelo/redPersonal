import { Injectable } from '@angular/core';
import { UserObject } from '../interfaces/user.interface';
import { Follow } from '../models/follow.class';
import { UserClassObject } from '../models/user.class';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
}
