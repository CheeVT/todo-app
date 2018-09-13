import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { Task } from '../task';
//import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + localStorage.getItem('token')
    })
};

@Injectable()
export class TasksService {
    apiUrl = 'http://127.0.0.1:8000/api/';

    constructor(private http: HttpClient) {
        //this.handleError = httpErrorHandler.createHandleError('TasksService');
    }

    getAllTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.apiUrl + 'guest-tasks');
    }

    get(userId): Observable<Task[]> {

        return this.http.get<Task[]>(this.apiUrl + 'tasks', httpOptions);
    }

    /*getTasks() {
        return this.http.get(this.apiUrl + 'guest-tasks');
    }*/
}