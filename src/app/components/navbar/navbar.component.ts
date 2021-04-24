import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/login.interface';
import { StorageService } from 'src/app/service/storage.service';
import {Router} from '@angular/router';
import { RedirectService } from 'src/app/service/redirect.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;

  constructor(private storage:StorageService,
    private router:Router,
    private redirect:RedirectService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.user=this.storage.obtenerUsuario()
  }

  cerrarSesion(){
    this.storage.cerrarSesion();
    this.router.navigate(['/']);
  }

  irPerfil(){
    this.redirect.redirectTo(`/board/profile/${this.user.ID}`);
  }

}
