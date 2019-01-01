import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  loginwithcredentials(username:string,password:string):boolean
  {
    if (username===password) return true; return false;
  }

}
