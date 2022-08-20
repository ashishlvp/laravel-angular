import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private http:HttpClient,private Token:TokenService) { }

  login(data: { email: null; password: null; }) {
    return this.http.post('http://localhost:8000/api/login',data);
  }

  logout() {
    this.http.post('http://localhost:8000/api/logout',this.Token.get()).subscribe(
      data => console.log(data),
      error => console.log(error),
    );
  }
}
