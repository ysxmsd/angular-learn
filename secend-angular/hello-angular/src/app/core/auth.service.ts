import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  loginauthvify(username:string,password:string):boolean{
    if (username==="wang")
      return true;
    return false;

  }

}
