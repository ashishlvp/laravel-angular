import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  handleToken(token) {
    this.set(token);
    console.log(this.isvalid());
  }
  set(token) {
    localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }
  remove() {
    localStorage.removeItem('token');
  }

  isvalid() {
    if (this.get() === null) {
      return false;
    } else {
      return true;
    }
  }

}
