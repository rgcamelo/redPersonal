import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

interface ErrorValidacion{
  [s:string]:boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  alMenosUno(form:AbstractControl): ErrorValidacion | null{
    if ( (form.get('comentario').value == '') &&  (form.get('image').value == '')) {
      return {niUno:true}
    }
    return null;
  }

  passwordsIguales(form:AbstractControl): ErrorValidacion | null{
    if (form.get('password').value !== form.get('password2').value) {
      return {noIguales:true}
    }
    return null;
  }
}
