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
  <div>
    <input [(ngModel)]="username" required type="text" #usernameRef="ngModel" minlength="3"> {{usernameRef.errors|json}}
        <div *ngIf="usernameRef.errors?.required">this is required</div>
        
    <input [(ngModel)]="password" required type="password" #passwordRef="ngModel"> {{passwordRef.errors|json}}
    <button (click)="onClick()">Login</button>
  </div>

  `,
  styles: [],

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

    onClick() {
    console.log('username:'+this.username+'\n'+'password:'+this.password);
    console.log(this.service.loginwithcredentials(this.username,this.password));
    
  }

}
