import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GroupObject } from 'src/app/interfaces/group.interface';
import { FollowGroupObject } from 'src/app/models/followGroup.class';
import { GroupService } from 'src/app/service/group.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.css']
})
export class CardGroupComponent implements OnInit {
  @Input() group:GroupObject;
  @Output() seguido = new EventEmitter<boolean>();

  constructor(
    private groupService:GroupService,
    private storage:StorageService,
  ) { }

  ngOnInit(): void {
  }

  seguirGrupo(){
    const id = this.storage.obtenerUsuario().ID;

    let sub = new FollowGroupObject(id,this.group.ID);

    this.groupService.seguirGroup(sub).subscribe( res =>{
      this.seguido.emit(true);
    })
  }

}
