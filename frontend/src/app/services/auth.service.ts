import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedin = new BehaviorSubject < boolean > (this.Token.isvalid())
  authstatus = this.loggedin.asObservable();
  changeAuthStatus(value: boolean) {
    this.loggedin.next(value);
}
  constructor(private Token: TokenService) { }
}
