import { Component, OnInit } from '@angular/core';

import { User } from '../user';

import { RegisterService } from './register.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [RegisterService],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  regErrors = [];
  regSuccess: string = '';

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.registerService.register(this.user).subscribe(user => {
      this.regErrors = [];
      this.regSuccess = 'You have successfully registered! You can login to your account';
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 3000);
    }, (err: HttpErrorResponse) => {
      this.regErrors = [];

      let regErrProps = Object.keys(err.error.errors);

      for (let props of regErrProps) {
        this.regErrors.push(err.error.errors[props][0]);
      }

    });
  }

}
