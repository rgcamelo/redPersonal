import { Injectable } from '@angular/core';
import { CommentClassObject } from '../models/comment.class';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http:HttpService
  ) { }

  postComment(comment:CommentClassObject){
    return this.http.postejecutarQuery(`comments`,comment);
  }
}
