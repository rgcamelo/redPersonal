import { Component } from '@angular/core';
import { SocketService } from './service/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redPersonal';

  constructor(private socket:SocketService){

  }
}
