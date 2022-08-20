import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommonserviceService } from 'src/app/services/commonservice.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private commonservice:CommonserviceService,private Token:TokenService,private router:Router,private auth:AuthService) { }
  public form = {
    email: null,
    password:null,
  }
  ngOnInit(): void {
  }
  onSubmit() {
    this.commonservice.login(this.form).subscribe(
      data => this.handleResponse(data),
      error =>error
    );

  }

  handleResponse(data) {
    this.Token.handleToken(data.access_token)
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }
}
