import { Component, OnInit } from '@angular/core';
import { NgxNotifierService } from 'ngx-notifier';
import { NotifyServiceService } from 'src/app/service/notify-service.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  id;

  constructor(private storage:StorageService,
    private notify:NotifyServiceService,
    private ngxNotifierService: NgxNotifierService) { }

  ngOnInit(): void {
    this.id = this.storage.obtenerUsuario().ID;
    this.obtenerEventos();
  }

  obtenerEventos(){
    this.notify.obtenerSub().subscribe( res => {
      if(res){
        switch(res.event){
          case 'new::reaction':
            //this.nuevaReaccion(res);
            break;
          case 'remove::reaction':
            //this.removerReaccion(res);
            break;
          case 'new::comment':
            //this.nuevoComentario(res);
            break;
          case 'new::subuser':
            this.hazSeguido(res);
            break;
          case 'new::subgroup':
            this.hazSeguidoGrupo(res);
            break;
        }
      }
    })
  }

  hazSeguido(res){
    if(this.id === res.user_id){
      this.createNotification(`Haz seguido a ${res.followed.name}`);
    }

    if(this.id === res.followed_id){
      this.createNotification(`Te ha seguido ${res.user.name}`);
    }
  }

  hazSeguidoGrupo(res){
    if(this.id === res.user_id){
      this.createNotification(`Haz seguido al grupo: ${res.group.name}`);
    }
  }

  noTeGusta(res){
    if (this.id === res.reaction.user_id) {
      //Haz dado Like
    }
  }


  createNotification(mensaje:string){
    this.ngxNotifierService.createToast(`<i class="fas fa-check"></i> ${mensaje}`, 'success', 3000);
  }






}
