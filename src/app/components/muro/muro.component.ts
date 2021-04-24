import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-muro',
  templateUrl: './muro.component.html',
  styleUrls: ['./muro.component.css']
})
export class MuroComponent implements OnInit {

  constructor(private postService:PostService) { }

  posts:Post[] = [];
  next;

  ngOnInit(): void {
    this.cargarPost();
    this.recibirEventos();
  }

  cargarPost(url?:string){
    this.postService.getPosts(url).subscribe( res =>{
      if(res){
        this.next = res.next;
        this.posts.push(...res.results);
        console.log(this.posts);
      }
    })
  }

  onScrollDown() {
    console.log("scrolled down!!",);

    if(this.next){
      this.next = this.next.substring(1);
      this.cargarPost(this.next);
    }

  }


  recibirEventos(){
    this.postService.obtenerSub().subscribe( res =>{
      if(res){
        switch(res.event){
          case 'new::post':
            this.nuevoPost(res);
            break;
        }
      }
    });
  }

  nuevoPost(res){
    if(this.posts){
      this.posts.unshift(res.post);
    }else{
      this.posts = [...res.post]
    }
    console.log(this.posts);
  }


}
