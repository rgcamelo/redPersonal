import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { fadeInOut } from 'src/app/animations/animation';
import { GroupClassObject } from 'src/app/models/group.class';
import { AlertService } from 'src/app/service/alert.service';
import { GroupService } from 'src/app/service/group.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-formulario-group',
  templateUrl: './formulario-group.component.html',
  styleUrls: ['./formulario-group.component.css'],
  animations: fadeInOut,
})
export class FormularioGroupComponent implements OnInit {
  form:FormGroup;
  load = false;

  constructor(
    private formBuilder:FormBuilder,
    private activeModal:NgbActiveModal,
    private groupService:GroupService,
    private storage:StorageService,
    private alert:AlertService,
  ) { }

  ngOnInit(): void {
    this.iniciarForm();
  }

  iniciarForm(){
    this.form = this.formBuilder.group({
      nombre:['',[Validators.required]],
      descripcion:['',[Validators.required]],
    });
  }

  cerrarModal() {
    this.activeModal.dismiss();
  }

  getTouchedBoth(){
    return this.form.get('nombre').touched && this.form.get('descripcion').dirty;
  }

  get newGrupo(){
    const nombre = this.form.get('nombre').value;
      const descripcion = this.form.get('descripcion').value;
      const id:number = this.storage.obtenerUsuario().ID;

      return new GroupClassObject(nombre,descripcion,id);
  }

  crearGrupo(){
    if (this.form.valid) {
      this.load=true;
      const group = this.newGrupo;
      this.groupService.postGroup(group).subscribe( res =>{
        this.load=false;
        this.cerrarModal();
        this.alert.abrirAlert(
        'Nuevo Grupo Creado',
        '',
        'success'
        );

      })
    }
  }

}
