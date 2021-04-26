import { Component, Input, OnInit} from '@angular/core';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from '../../service/post.service';
import { StorageService } from 'src/app/service/storage.service';


@Component({
  selector: 'app-muro',
  templateUrl: './muro.component.html',
  styleUrls: ['./muro.component.css']
})
export class MuroComponent implements OnInit {

  config= {
    animationType: ngxLoadingAnimationTypes.circleSwish,
    primaryColour: '#2b5b99',
    backdropBorderRadius: '3px',
    backdropBackgroundColour: 'transparent'
  }

  constructor(private postService:PostService,
    private storage:StorageService) { }

  posts:Post[] = [];
  load=false;
  next;

  ngOnInit(): void {
    this.cargarPost();
    this.recibirEventos();
  }

  cargarPost(url?:string){
    this.postService.getPosts(url).subscribe( res =>{
      this.load = false;
      if(res){
        this.next = res.next;
        this.posts.push(...res.results);
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
          case 'new::subuser':
            this.nuevoUsuarioSeguido(res);
            break;
          case 'new::subgroup':
            this.nuevoGrupoSeguido(res);
            break;
        }
      }
    });
  }

  nuevoPost(res){
    const id=this.storage.obtenerUsuario().ID;
    if(res.post.user_id === id ){
      if(this.posts){
        this.posts.unshift(res.post);
      }else{
        this.posts = [...res.post]
      }
    }
  }

  nuevoUsuarioSeguido(res){
    const id=this.storage.obtenerUsuario().ID;
    if(res.user_id === id){
      // Yo siguiendo
      this.load = true
      this.cargarPost();
    }

    if(res.followed_id ===id){
      //me siguieron

    }
  }

  nuevoGrupoSeguido(res){
    const id=this.storage.obtenerUsuario().ID;
    if(res.user_id === id){
      // Yo siguiendo
      this.load = true
      this.cargarPost();
    }
  }









}
