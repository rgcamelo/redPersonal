import { Injectable } from '@angular/core';
import { GroupObject } from '../interfaces/group.interface';
import { GroupClassObject } from '../models/group.class';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http:HttpService) { }


  getGroups(){
    return this.http.ejecutarQuery<GroupObject[]>(`groups`);
  }

  postGroup(group:GroupClassObject){
    return this.http.postejecutarQuery<GroupObject>(`groups`,group);
  }

  seguirGroup(seguir){
    return this.http.postejecutarQuery<any>(`groups/append`,seguir);
  }
}
