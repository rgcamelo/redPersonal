import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { fadeInOut } from 'src/app/animations/animation';
import { UserClassObject } from 'src/app/models/user.class';
import { AlertService } from 'src/app/service/alert.service';
import { UserService } from 'src/app/service/user.service';
import { ValidatorService } from 'src/app/service/validator.service';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css'],
  animations: fadeInOut,
})
export class FormularioUsuarioComponent implements OnInit {

  form:FormGroup;
  httpError=false;
  httpErrorMessage=""
  load = false;

  constructor(
    private formBuilder:FormBuilder,
    private validatorService:ValidatorService,
    private userService:UserService,
    private alert:AlertService,
    private router:Router,
  ) {
    this.iniciarForm();
  }

  ngOnInit(): void {
  }

  iniciarForm(){
    this.form = this.formBuilder.group({
      nombre:['',[Validators.required, Validators.minLength(5)]],
      email:['',[Validators.required, Validators.pattern('[a-z0-9._%+-]{3,}@[a-z]{3,}([.]{1}[a-z]{2,}|[.]{1}[a-z]{2,}[.]{1}[a-z]{2,})') ]],
      passwords: this.formBuilder.group({
        password:['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
        password2:['',Validators.required],
      }, {validators: this.validatorService.passwordsIguales })
    });
  }

  registrar(){
    if (this.form.valid) {
      this.load=true;
      console.log(this.form);
      this.userService.postUser(this.newUser)
      .pipe(
        finalize(() => {
          this.load = false;
        })
      ).subscribe( res => {
        this.succesAlert();
        this.router.navigate(['']);
        console.log(res);
      }, error =>{
        if(error){
          this.hasError(error.error);
        }
      });
    }
  }

  succesAlert(){
    this.alert.abrirAlert(
      'Bienvienido',
      'Ahora inicia sesion',
      'success'
    )
  }

  get newUser(){
    const name = this.form.get('nombre').value;
    const email = this.form.get('email').value;
    const pass = this. form.get('passwords.password').value;
    return new UserClassObject(name,email,pass);
  }

  get nameMinLength(){
    return this.form.get('nombre').hasError('minlength');
  }

  get emailTouched(){
    return this.form.get('email').dirty;
  }

  get emailError(){
    return this.form.get('email').hasError('pattern');
  }

  get password1Error(){
    return this.form.get('passwords.password').hasError('pattern');
  }

  get passNoIguales(){
    return this.form.get('passwords')?.hasError('noIguales')
  }

  hasError(error:string){
    if (error == 'Duplicated Email') {
      this.httpError = true;
      this.httpErrorMessage = 'Este Correo ya esta en uso'
    }
    setTimeout(()=>{ this.httpError = false}, 3000);
  }



}
