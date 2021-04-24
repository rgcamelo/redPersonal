
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LoginObject } from '../interfaces/login.interface';
import { Login } from '../models/login.class';
import { HttpService } from './http.service';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpService
  ) { }

  login(login:Login){
    return this.http.postejecutarQuery<LoginObject>(`auth`,login)
  }
}
