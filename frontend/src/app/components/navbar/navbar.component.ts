import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommonserviceService } from 'src/app/services/commonservice.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedin: boolean;
  constructor(private auth:AuthService,private router:Router,private Token:TokenService,private commonservice:CommonserviceService) { }
  ngOnInit(): void {
    this.auth.authstatus.subscribe(value => this.loggedin = value);
  }
  logout() {
    this.commonservice.logout();
    this.auth.changeAuthStatus(false);
    this.Token.remove();
    this.router.navigateByUrl('/login');
  }
}
