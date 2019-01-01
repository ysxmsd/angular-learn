import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `

  <div>
    <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
      <fieldset ngModelGroup="login">
        <input name="username" type="text" [(ngModel)]="username" required #usernameRef="ngModel" />
        {{usernameRef.errors|json}}
        <div *ngIf="usernameRef.errors?.required">this is required</div>

        <input name="password" type="password" [(ngModel)]="password" required #passwordRef="ngModel" />
        {{passwordRef.errors|json}}

       <!-- <button (click)="onClick()">Login</button> -->
        <button type="submit">LOGO</button>
      </fieldset>
    </form>
  </div>

  `,
  styleUrls: ['./logo.component.css'],

  styles: [`
  input.ng-invalid{
    border: 3px solid red;
  }
  input.ng-valid{
    border: 3px solid green;
  }
`]
})
export class LogoComponent implements OnInit {

  constructor(@Inject('auth') private service) { }

  ngOnInit() {
  }

  onClick(){console.log("test");}

  onSubmit(formValue){
    console.log(this.service.loginauthvify(formValue.login.username,formValue.login.password)+'username:'+formValue.login.username+'\n'+"password:"+formValue.login.password);
    console.log(formValue);}

}
