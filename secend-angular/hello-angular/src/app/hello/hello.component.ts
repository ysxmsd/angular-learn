import { Component, OnInit, Inject } from '@angular/core';

//import { AuthService } from '../core/auth.service';

//template
/*
<!--<input #logname type="text">-->
 <!--
      <button (click)="onclick(logname.value,logpassword.value)">Login</button>
  -->
*/

//组件的修饰器
@Component({
  selector: 'app-hello',
  template: `
    <div>
      <input type="text" [(ngModel)]="username" required #usernameRef="ngModel" />
      {{usernameRef.errors|json}}
      <div *ngIf="usernameRef.errors?.required">this is required</div>

      <input type="password" [(ngModel)]="password" required #passwordRef="ngModel" />
      {{passwordRef.errors|json}}
      <button (click)="onClick()">Login</button> 
    </div>
  `,
  styles: [],
  //配置AuthServic, 里面会配置这个类型的实例
  //providers:[AuthService]
  
})
export class HelloComponent implements OnInit {

  //service:AuthService;

  //constructor() {this.service=new AuthService(); }

  //组件的构造函数中使用参数进行依赖注入
  //constructor(private service:AuthService){}

  //请到系统配置中找到名称为auth的那个依赖注入到我修饰的变量中

  constructor(@Inject('auth') private service){}

  ngOnInit() {
  }

  username="";
  password="";

  

  onClick(){
    
    if (this.username==='')
    {console.log('用户名不能为空');}
    else
    {console.log(this.service.loginauthvify(this.username,this.password)+'username:'+this.username+'\n'+"password:"+this.password);}
  
  //onclick(logname,password){console.log(this.service.loginauthvify(logname,password)+'username:'+logname+'\n'+"password:"+password);}
  }
}
