import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(
    private storage:StorageService,
    private router:Router
  ) { }

  intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
    const token = this.storage.obtenerToken();
    if (!token) {
      return next.handle(request); // Adonde va?
    }
    request = request.clone({
      headers:request.headers
      .set('Content-Type','application/json')
      .set('Authorization',`Bearer ${token}`)
    });
    return next.handle(request).pipe(
      tap( () => {}, error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status !== 401) {
            return;
          }
          this.router.navigate(['/']);
        }
      })
    )
  }

}
