import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchResponseObject } from 'src/app/interfaces/searchResponse.interface';
import { StorageService } from 'src/app/service/storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  resultados:SearchResponseObject[]=[];
  constructor(private storage:StorageService,
    private activeRoute: ActivatedRoute,
    private userService:UserService) { }

  ngOnInit(): void {
    this.cargarUser();
    this.escucharEventos();
  }
  cargarUser(){
    const buscar = this.activeRoute.snapshot.queryParamMap.get('buscar');
    this.userService.searchUser(buscar).subscribe(res =>{
      this.resultados = res;
    })
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





}
