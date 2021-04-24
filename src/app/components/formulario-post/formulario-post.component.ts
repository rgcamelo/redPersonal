import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ValidatorService } from '../../service/validator.service';
import { PostService } from '../../service/post.service';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';
import * as uuid from 'uuid';
import { finalize } from 'rxjs/operators';
import { AlertService } from 'src/app/service/alert.service';


@Component({
  selector: 'app-formulario-post',
  templateUrl: './formulario-post.component.html',
  styleUrls: ['./formulario-post.component.css']
})
export class FormularioPostComponent implements OnInit {

  form:FormGroup;
  load = false;

  constructor(
    private formBuilder:FormBuilder,
    private validator:ValidatorService,
    private activeModal:NgbActiveModal,
    private post:PostService,
    private storage:AngularFireStorage,
    private alert:AlertService,
  ) {

  }

  ngOnInit(): void {
    this.iniciarForm();
  }

  iniciarForm(){
    this.form = this.formBuilder.group({
      comentario:[''],
      image:[''],
    }, {validators:this.validator.alMenosUno});
  }

  publicar(event){
    if (this.form.valid) {
      this.load=true;
      this.Validar(event);
      console.log(this.form);
    }
  }

  cerrarModal() {
    this.activeModal.dismiss();
  }


  Validar(event){
    if(event.target[1].files[0]){
    const archivo = event.target[1].files[0];
    console.log(event.target[1].files[0]);
    const partes = archivo.name.split('.');
    const extension = partes[partes.length - 1];
    const uui = uuid.v4();
    const nombre = `${uui}.${extension}`;
    const path = `images/${nombre}`;
    this.guardarFireStore(path, archivo);
    }else{
      this.guardar();
    }
  }

  guardarFireStore(path:string,archivo:any){
    const ref = this.storage.ref(path);
    const task = this.storage.upload(path, archivo);
    task.snapshotChanges()
    .pipe(
      finalize(() => {
        console.log("Finalizo...");
        this.obtenerUrl(ref);
      })
    ).subscribe();
  }

  obtenerUrl(ref:AngularFireStorageReference){
    ref.getDownloadURL().subscribe( res => {
      let url = res;
      this.guardar(url);
    });
  }

  guardar(url?:string){
    let t = this.form.get('comentario').value;
    console.log(t,url);
    this.post.postPost(t,url).subscribe(res => {
      this.load = false;
    this.cerrarModal();
    this.alert.abrirAlert(
      'Nuevo Post',
      '',
      'success'
    )
    })
  }

}
