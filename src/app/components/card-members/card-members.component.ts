import { Component, Input, OnInit } from '@angular/core';
import { UserObject } from 'src/app/interfaces/user.interface';
import { RedirectService } from 'src/app/service/redirect.service';

@Component({
  selector: 'app-card-members',
  templateUrl: './card-members.component.html',
  styleUrls: ['./card-members.component.css']
})
export class CardMembersComponent implements OnInit {
  @Input() user:UserObject;

  constructor(private redirect:RedirectService) { }

  ngOnInit(): void {
  }

  irPerfil(){
    this.redirect.redirectTo(`/board/profile/${this.user.ID}`);
  }

}
