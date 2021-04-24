import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormularioPostComponent } from '../formulario-post/formulario-post.component';

@Component({
  selector: 'app-woym',
  templateUrl: './woym.component.html',
  styleUrls: ['./woym.component.css']
})
export class WoymComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  nuevoPost(){
    const modalRef = this.abrirModal();
  }

  abrirModal():NgbModalRef{
    return this.modal.open(FormularioPostComponent,{
      backdrop:'static',size:'md',windowClass:'modal'
    });
  }

}
