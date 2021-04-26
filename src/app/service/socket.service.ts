import { EventEmitter, Injectable } from '@angular/core';
import { NotifyServiceService } from './notify-service.service';
import { PostService } from './post.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: WebSocket;
  emisor: EventEmitter<any> = new EventEmitter();

  constructor(
    private postService:PostService,
    private userService:UserService,
    private notifyService:NotifyServiceService,
  ) {
    this.socket = new WebSocket(`ws://18.189.21.84:5050/ws`)


    this.socket.onopen = evt =>{
      console.log('Abierto...');
    }

    this.socket.onclose = evt =>{
      console.log('Cerrado...');
    }

    this.socket.onmessage = evt =>{

      const data=JSON.parse(evt.data);

      // if(data.event === 'new::reaction'){

      // }
      this.postService.sub.next(data);
      this.userService.sub.next(data);
      this.notifyService.sub.next(data);
    }
  }


}
