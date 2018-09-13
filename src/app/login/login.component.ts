import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { LoginService } from './login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginService],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginError = false;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login(email, password): void {
    var params = {
      email: email,
      password: password
    };

    this.loginService.login(params).subscribe(user => {
      //console.log(user.token);
      localStorage.setItem('token', user.token);
      this.router.navigate(['/tasks']);
    }, (err: HttpErrorResponse) => {
      this.isLoginError = true;
    });
  }


}
