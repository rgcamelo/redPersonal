import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ngxLoadingAnimationTypes } from 'ngx-loading';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  @Input() loading: boolean = false;

  config= {
    animationType: ngxLoadingAnimationTypes.circleSwish,
    primaryColour: '#ffffff',
    backdropBorderRadius: '3px',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
