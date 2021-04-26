import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyServiceService {
  sub = new Subject<any>();

  constructor() { }

  obtenerSub(){
    return this.sub.asObservable();
  }
}
