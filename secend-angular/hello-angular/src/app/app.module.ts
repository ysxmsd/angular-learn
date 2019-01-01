import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { AuthService } from './core/auth.service';
import { LogoComponent } from './logo/logo.component';
import { RouterModule } from '@angular/router'; 


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule，
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      }
  ],
  providers: [{provide:'auth',useClass:AuthService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
