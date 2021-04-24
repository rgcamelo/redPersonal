import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  abrirAlert(title:string,text:string,icono:SweetAlertIcon,cancelButton:boolean=false,confirmButton:boolean=false,timer:number=1500){
    return Swal.fire({
      title:title,
      text:text,
      showCancelButton: cancelButton,
      showConfirmButton: confirmButton,
      icon:icono,
      timer:timer
    })
  }
}
