import { Component } from '@angular/core';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  isLogged = false;

  constructor(private auth: AuthGuard, private router: Router) { }

  ngOnInit() {
    this.isLogged = this.auth.canActivate();
  }

  logout() {
    alert('testtt');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }





}
