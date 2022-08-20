import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CommonserviceService } from './services/commonservice.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  public loggedin: boolean;
  constructor(private auth: AuthService, private router: Router
    , private Token: TokenService, private commonservice: CommonserviceService) { }
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



