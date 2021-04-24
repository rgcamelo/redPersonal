import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserObject } from 'src/app/interfaces/user.interface';
import { Follow } from 'src/app/models/follow.class';
import { RedirectService } from 'src/app/service/redirect.service';
import { StorageService } from 'src/app/service/storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css']
})
export class CardProfileComponent implements OnInit {
  @Input() user:UserObject;
  @Output() seguido = new EventEmitter<boolean>();

  constructor(private storage:StorageService,
    private userService:UserService,
    private redirect:RedirectService) { }

  ngOnInit(): void {
  }

  seguir(){
    const id = this.storage.obtenerUsuario().ID;
    const followed_id = this.user.ID;

    const follow = new Follow(id,followed_id);
    this.userService.subsUser(follow).subscribe( res =>{
      this.seguido.emit(true);
    })
  }

  irPerfil(){
    this.redirect.redirectTo(`/board/profile/${this.user.ID}`);
  }



}
