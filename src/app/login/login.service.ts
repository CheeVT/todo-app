import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';

import { User } from '../user';

import { MessageService } from '../message.service';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable()
export class LoginService {
    apiUrl = 'http://127.0.0.1:8000/api/';

    constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private messageService: MessageService) { }

    login(params): Observable<User> {
        return this.http.post<User>(this.apiUrl + 'login', params);
    }

    public isAuthenticated(): boolean {
        const TOKEN = localStorage.getItem('token');

        return !this.jwtHelper.isTokenExpired(TOKEN);
    }


}