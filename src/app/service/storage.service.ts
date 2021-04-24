import { Injectable } from '@angular/core';
import { User } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  guardarToken(token:string){
    window.localStorage.setItem('app-red-token',token);
  }

  obtenerToken(): string | null {
    return window.localStorage.getItem('app-red-token');
  }

  guardarUsuario(usuario: User) {
    window.localStorage.setItem('app-posts-usuario', JSON.stringify(usuario));
  }

  obtenerUsuario(): User {
    const usuarioJson = window.localStorage.getItem('app-posts-usuario');
    if (!usuarioJson) {
      return null;
    }
    return JSON.parse(usuarioJson);
  }

  cerrarSesion(){
    window.localStorage.removeItem('app-red-token');
    window.localStorage.clear();
  }
}
