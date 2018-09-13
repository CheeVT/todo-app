import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../user';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable()
export class RegisterService {
    apiUrl = 'http://127.0.0.1:8000/api/';

    //user = new User();

    constructor(private http: HttpClient) { }

    register(data): Observable<User> {
        return this.http.post<User>(this.apiUrl + 'register', data, httpOptions);

    }
}