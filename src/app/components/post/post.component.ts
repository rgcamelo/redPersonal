import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { LikeObject } from 'src/app/models/like.class';
import { HttpService } from 'src/app/service/http.service';
import { PostService } from 'src/app/service/post.service';
import { RedirectService } from 'src/app/service/redirect.service';
import { StorageService } from 'src/app/service/storage.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post:Post;

  constructor(
    private postService:PostService,
    private storage:StorageService,
    private redirect:RedirectService,
  ) { }

  ngOnInit(): void {
    this.recibirEventos();
  }

  reaccionar(idPost:string){
    const id = this.storage.obtenerUsuario().ID;
    let like = new LikeObject( parseInt(idPost),id);
    this.postService.postLike(like).subscribe( res =>{

    });
  }

  get miReaccion(){
    return this.post.reactions?.some( rea =>{
      const id = this.storage.obtenerUsuario().ID;
      return rea.user_id === id;
    })
  }

  recibirEventos(){
    this.postService.obtenerSub().subscribe( res =>{
      if(res){
        switch(res.event){
          case 'new::reaction':
            this.nuevaReaccion(res);
            break;
          case 'remove::reaction':
            this.removerReaccion(res);
            break;
          case 'new::comment':
            this.nuevoComentario(res);
            break;
        }
      }
    });
  }

  nuevaReaccion(res){
    if(this.post.ID === res.reaction.post_id){
      if(this.post.reactions){
        this.post.reactions.push(res.reaction);
      }else{
        this.post.reactions = [res.reaction]
      }
    }
  }

  removerReaccion(res){
    if(this.post.ID === res.reaction.post_id){
      if(!this.post.reactions){
        return
      }
      const id = this.storage.obtenerUsuario().ID;
      const reaction = this.post.reactions.find( rea =>{
        return rea.user_id === id || rea.user_id === res.reaction.user_id;
      })

      if(reaction){
        this.post.reactions.splice(this.post.reactions.indexOf(reaction),1);
      }
    }
  }

  nuevoComentario(res){
    if(this.post.ID === res.comment.post_id){
      if(this.post.comments){
        this.post.comments.push(res.comment);
      }else{
        this.post.comments = [...res.comment]
      }
    }
  }

  irPerfil(id:string){
    this.redirect.redirectTo(`/board/profile/${id}`);
  }











}
