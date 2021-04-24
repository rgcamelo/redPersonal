import { Component, OnInit } from '@angular/core';
import { GroupObject } from 'src/app/interfaces/group.interface';
import { GroupService } from 'src/app/service/group.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormularioGroupComponent } from '../formulario-group/formulario-group.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  gruposSugeridos:GroupObject[] = [];
  misGrupos:GroupObject[] = [];


  constructor(private groups:GroupService,
    private modal:NgbModal,) { }

  ngOnInit(): void {
    this.cargarGrupos();
  }

  cargarGrupos(){
    this.groups.getGroups().subscribe( res =>{
      this.gruposSugeridos = res;
      console.log(res);
    })
  }

  abrirModalCrearGrupo():NgbModalRef{
    return this.modal.open(FormularioGroupComponent,{
      backdrop:'static',size:'md',windowClass:'modal'
    });
  }
}

