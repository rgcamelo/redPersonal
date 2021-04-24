import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MuroComponent } from './components/muro/muro.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BoardComponent } from './components/board/board.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostComponent } from './components/post/post.component';
import { WoymComponent } from './components/woym/woym.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioPostComponent } from './components/formulario-post/formulario-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { InterceptorService } from './service/interceptor.service';
import { CommentsComponent } from './components/comments/comments.component';

import {AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { NgxLoadingModule } from 'ngx-loading';
import { LoadingComponent } from './components/loading/loading.component';
import { OnePostComponent } from './components/one-post/one-post.component';
import { CommentBarComponent } from './components/comment-bar/comment-bar.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RigthBarComponent } from './components/rigth-bar/rigth-bar.component';
import { CardProfileComponent } from './components/card-profile/card-profile.component';
import { CardGroupComponent } from './components/card-group/card-group.component';
import { FormularioGroupComponent } from './components/formulario-group/formulario-group.component'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    MuroComponent,
    LoginComponent,
    SidebarComponent,
    BoardComponent,
    ProfileComponent,
    NavbarComponent,
    PostComponent,
    WoymComponent,
    FormularioPostComponent,
    CommentsComponent,
    LoadingComponent,
    OnePostComponent,
    CommentBarComponent,
    FormularioUsuarioComponent,
    RigthBarComponent,
    CardProfileComponent,
    CardGroupComponent,
    FormularioGroupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    NgxLoadingModule.forRoot({}),
    InfiniteScrollModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
