import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//引入AuthService
import { AuthService } from './core/auth.service';

//引入RouterModule路由
import {Routes,RouterModule} from '@angular/router';
import { routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    //RouterModule.forRoot([{path:'login',component:LoginComponent},{path:'',redirectTo:'login',pathMatch:'full'}])
  ],
  providers: [{provide:'auth',useClass:AuthService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
