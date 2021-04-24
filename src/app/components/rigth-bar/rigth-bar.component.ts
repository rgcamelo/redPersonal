import { Component, OnInit } from '@angular/core';
import { UserObject } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-rigth-bar',
  templateUrl: './rigth-bar.component.html',
  styleUrls: ['./rigth-bar.component.css']
})
export class RigthBarComponent implements OnInit {
  users:UserObject[]=[];

  constructor(
    private userService:UserService,
  ) { }

  ngOnInit(): void {
    this.cargarUser();
  }

  cargarUser(){
    this.userService.getUsers().subscribe( res =>{
      this.users = res;
    });
  }

  reload(event){
    if(event == true){
      this.cargarUser()
    }
  }

}
