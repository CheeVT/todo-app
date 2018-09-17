import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

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

    getAllTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.apiUrl + 'guest-tasks');
    }

    get(userId): Observable<Task[]> {
        let headers = this.createAuthorizationHeader();
        return this.http.get<Task[]>(this.apiUrl + 'tasks', { headers: headers });
    }

    add(task): Observable<Task> {
        let headers = this.createAuthorizationHeader();
        return this.http.post<Task>(this.apiUrl + 'tasks', { task: task }, { headers: headers });
    }

    delete(id) {
        let headers = this.createAuthorizationHeader();
        return this.http.delete(this.apiUrl + 'tasks/' + id, { headers: headers });
    }


    /*getTasks() {
        return this.http.get(this.apiUrl + 'guest-tasks');
    }*/
}