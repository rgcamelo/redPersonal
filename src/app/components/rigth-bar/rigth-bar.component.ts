import { Component, OnInit, } from '@angular/core';
import { UserObject } from 'src/app/interfaces/user.interface';
import { RedirectService } from 'src/app/service/redirect.service';
import { StorageService } from 'src/app/service/storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-rigth-bar',
  templateUrl: './rigth-bar.component.html',
  styleUrls: ['./rigth-bar.component.css']
})
export class RigthBarComponent implements OnInit {
  users:UserObject[]=[];

  constructor(
    private userService:UserService,
    private redirect:RedirectService,
    private storage:StorageService
  ) { }

  ngOnInit(): void {
    this.cargarUser();
    this.escucharEventos();
  }

  cargarUser(){
    this.userService.getUsers().subscribe( res =>{
      this.users = res;
    });
  }

  escucharEventos(){
    this.userService.obtenerSub().subscribe(res =>{
      if(res){
        switch(res.event){
          case 'new::subuser':
            this.nuevoUsuarioSeguido(res);
            break;
        }
      }
    });
  }

  nuevoUsuarioSeguido(res){
    const id=this.storage.obtenerUsuario().ID;
    if(res.user_id === id){
      // Yo siguiendo
      this.cargarUser();
    }
    if(res.followed_id ===id){
      //me siguieron

    }
  }

  irMuro(){
    this.redirect.redirectTo(`/board/muro`);
  }

}
