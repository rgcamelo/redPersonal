import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class GuardianLoginService {

  constructor(
    private storage:StorageService,
    private router:Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    const token = this.storage.obtenerToken();
    if (Boolean(token)) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
