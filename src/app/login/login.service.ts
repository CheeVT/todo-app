import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';

import { User } from '../user';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable()
export class LoginService {
    apiUrl = 'http://127.0.0.1:8000/api/';

    constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

    login(params): Observable<User> {
        return this.http.post<User>(this.apiUrl + 'login', params, httpOptions);
    }

    public isAuthenticated(): boolean {
        const TOKEN = localStorage.getItem('token');

        return !this.jwtHelper.isTokenExpired(TOKEN);
    }
}