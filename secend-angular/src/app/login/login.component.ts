import { Component, OnInit,Inject } from '@angular/core';


//引入AuthService
//import { AuthService } from '../core/auth.service';


//@Component是Angular提供的装饰器函数，用来描述Compoent的元数据
//其中selector是指这个组件的在HTML模板中的标签是什么
//template是嵌入（inline）的HTML模板，如果使用单独文件可用templateUrl
//styles是嵌入（inline）的CSS样式，如果使用单独文件可用styleUrls

@Component({
  selector: 'app-login',
  template: `
  <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
    <fieldset ngModelGroup="login">
      <input type="text" name="username" [(ngModel)]="username" required  #usernameRef="ngModel" minlength="3"> {{usernameRef.errors|json}}
        <div *ngIf="usernameRef.errors?.required">this is required</div>
        
      <input type="password" name="password" [(ngModel)]="password" required  #passwordRef="ngModel"> {{passwordRef.errors|json}}
        <div *ngIf="passwordRef.errors?.required">this is required</div>

    <!-- <button (click)="onClick()">Login</button>-->
    <button type="submit">Submit</button>
    </fieldset>

  
  </form>

  `,
  styles: [
    `
    input.ng-invalid{
      border:3px solid red;
    }
    input.ng-valid{
      border:3px solid green;
    }
   

  `
],

  //providers:[AuthService]
})
export class LoginComponent implements OnInit {

  //声明成员变量，其类型为AuthService
  //service:AuthService;

  //constructor() { this.service=new AuthService(); }

  username:string;
  password:string;

  constructor(@Inject('auth') private service){}

  ngOnInit() {
  }

  //   onClick() {
  //   console.log('username:'+this.username+'\n'+'password:'+this.password);
  //   console.log(this.service.loginwithcredentials(this.username,this.password));
  // }

    onSubmit(formvalue){
      console.log('username:'+this.username+'\n'+'password:'+this.password);
     console.log(this.service.loginwithcredentials(this.username,this.password));
    }

}
