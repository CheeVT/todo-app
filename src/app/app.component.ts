import { Component } from '@angular/core';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { Router } from '@angular/router';

import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';

  constructor(private auth: AuthGuard, private router: Router, private login: LoginService) { }

  ngOnInit() {

  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }





}
