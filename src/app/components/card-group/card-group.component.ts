import { Component, Input, OnInit } from '@angular/core';
import { GroupObject } from 'src/app/interfaces/group.interface';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.css']
})
export class CardGroupComponent implements OnInit {

  @Input() group:GroupObject;
  constructor() { }

  ngOnInit(): void {
  }

}
