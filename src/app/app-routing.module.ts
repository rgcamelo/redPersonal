import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { MuroComponent } from './components/muro/muro.component';
import { OnePostComponent } from './components/one-post/one-post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GuardianLoginService } from './service/guardian-login.service';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'registrar-usuario', component: FormularioUsuarioComponent},
  { path: 'board', component: BoardComponent, canActivate: [GuardianLoginService],
    children:[
      { path: '', redirectTo: 'muro', pathMatch: 'full' },
      { path: 'muro', component: MuroComponent },
      { path: 'profile/:id', component: ProfileComponent},
      { path: 'post/:id', component: OnePostComponent},
      { path: 'buscar', component: BusquedaComponent},
    ]},
  { path: '**', redirectTo: 'board' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
