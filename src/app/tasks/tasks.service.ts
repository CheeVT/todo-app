import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Task } from '../task';


@Injectable()
export class TasksService {
    apiUrl = 'http://127.0.0.1:8000/api/';

    constructor(private http: HttpClient) {

    }

    createAuthorizationHeader() {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem('token')
        });
        return headers;
    }


    get(userId): Observable<Task[]> {
        let headers = this.createAuthorizationHeader();
        return this.http.get<Task[]>(this.apiUrl + 'tasks', { headers: headers });
    }

    add(task): Observable<Task> {
        let headers = this.createAuthorizationHeader();
        return this.http.post<Task>(this.apiUrl + 'tasks', task, { headers: headers });
    }

    update(id, task): Observable<Task> {
        let headers = this.createAuthorizationHeader();
        return this.http.put<Task>(this.apiUrl + 'tasks/' + id, task, { headers: headers });
    }

    delete(id) {
        let headers = this.createAuthorizationHeader();
        return this.http.delete(this.apiUrl + 'tasks/' + id, { headers: headers });
    }
}