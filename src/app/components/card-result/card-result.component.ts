import { Component, Input, OnInit } from '@angular/core';
import { SearchResponseObject } from 'src/app/interfaces/searchResponse.interface';
import { Follow } from 'src/app/models/follow.class';
import { RedirectService } from 'src/app/service/redirect.service';
import { StorageService } from 'src/app/service/storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-card-result',
  templateUrl: './card-result.component.html',
  styleUrls: ['./card-result.component.css']
})
export class CardResultComponent implements OnInit {
  @Input() user:SearchResponseObject;

  constructor(
    private storage:StorageService,
    private userService:UserService,
    private redirect:RedirectService
  ) { }

  ngOnInit(): void {
  }

  seguir(){
    const id = this.storage.obtenerUsuario().ID;
    const followed_id = this.user.ID;
    const follow = new Follow(id,followed_id);
    this.userService.subsUser(follow).subscribe( res =>{

    })
  }

  irPerfil(){
    this.redirect.redirectTo(`/board/profile/${this.user.ID}`);
  }

}
