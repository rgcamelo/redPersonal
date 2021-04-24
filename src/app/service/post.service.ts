import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post, PostObject } from '../interfaces/post.interface';
import { LikeObject } from '../models/like.class';
import { PostClassObject, User } from '../models/post.class';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';



@Injectable({
  providedIn: 'root'
})
export class PostService {
  sub = new Subject<any>();

  constructor(
    private storage:StorageService,
    private http:HttpService) { }

  getPosts(url?:string){
    if (url) {
      return this.http.ejecutarQuery<PostObject>(url);
    }else{
      return this.http.ejecutarQuery<PostObject>(`posts?limit=10&offset=0`);
    }

  }

  getPost(id:string){
    return this.http.ejecutarQuery<PostObject>(`posts/${id}`);
  }

  getPostUser(id:string){
    return this.http.ejecutarQuery<Post[]>(`posts/user/${id}`);
  }

  postPost(text?:string,image?:string){
    let userStorage = this.storage.obtenerUsuario()
    let user:User = new User(
      userStorage.ID,
      userStorage.name,
      userStorage.email,
      userStorage.avatar
    )

    let post:PostClassObject = new PostClassObject(
      userStorage.ID,
      user,
      text,
      image
    )


    return this.http.postejecutarQuery<PostObject>(`posts`,post);
  }

  postLike(like:LikeObject){
    return this.http.postejecutarQuery<any>(`reactions`,like);
  }

  obtenerSub(){
    return this.sub.asObservable();
  }


}
