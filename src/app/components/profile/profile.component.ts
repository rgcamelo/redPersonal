import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/login.interface';
import { PostObject } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/service/post.service';
import { StorageService } from '../../service/storage.service';
import { Post } from '../../interfaces/post.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  idUser:string;
  user:User;
  postsUser: Post[]=[];

  constructor(private activeRoute: ActivatedRoute,
    private userService:UserService,
    private postService:PostService) { }

  ngOnInit(): void {
    this.cargarUser();
    console.log(this.idUser);
    this.cargarPostUser();
  }

  cargarUser(){
    this.idUser = this.activeRoute.snapshot.paramMap.get('id');
    this.userService.getUser(this.idUser).subscribe( res =>{
      if(res){
        this.user = res;
        console.log(res);
      }
    });
  }

  cargarPostUser(){
    this.postService.getPostUser(this.idUser).subscribe( res=>{
      if(res){
        this.postsUser = res;
        this.user = this.postsUser[0].user;
      console.log(res);
      }
    })
  }


}
