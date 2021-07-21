import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomeStyleDirective } from './custome-style.directive';
import{HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    PageNotFoundComponent,
    CustomeStyleDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
