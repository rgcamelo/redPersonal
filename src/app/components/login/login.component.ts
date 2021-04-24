import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faSellcast } from '@fortawesome/free-brands-svg-icons';
import { Login } from '../../models/login.class';
import { AuthService } from '../../service/auth.service';
import {Router} from '@angular/router';
import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  submited=false;
  httpError=false;
  httpErrorMessage=""

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private storage:StorageService,
    private router:Router,
  ) {
  }

  ngOnInit(): void {
    this.iniciarForm();
  }

  submit(){
    this.submited = true;
    if (this.form.valid) {
      let email = this.form.get('email').value;
    let password = this.form.get('password').value;
    let login:Login = new Login(email,password);
    this.authService.login(login).subscribe( res =>{
      this.storage.guardarUsuario(res.user);
      this.storage.guardarToken(res.token);
      this.router.navigate(['/board']);
    }, error =>{
      if (error) {
        this.hasError(error.error)
      }

    });
    console.log(login);
    }

  }

  hasError(error:string){
    if (error == 'Wrong password') {
      this.httpError = true;
      this.httpErrorMessage = 'Contraseña Incorrecta'
    }
    if (error == 'User does not exist') {
      this.httpError = true;
      this.httpErrorMessage = 'Usuario no Existe'
    }
    setTimeout(()=>{ this.httpError = false}, 3000);
  }



  iniciarForm(){
    this.form = this.formBuilder.group({
      email: [ '' ,[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]],
      password: ['', [Validators.required]],
    })
  }



  get emailNoValido(){
    const email = this.form.get('email');
    return (email?.dirty && email?.hasError('pattern'));
  }

  get emailRequired(){
    const email = this.form.get('email');
    return email?.hasError('required') && this.submited;
  }

  get passwordNoValido(){
    return this.form.get('password')?.hasError('required') && this.submited
  }

}
