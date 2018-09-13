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

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  register() {
    console.log(this.user);
    this.registerService.register(this.user).subscribe(user => {
      console.log(user);
    });
  }

}
