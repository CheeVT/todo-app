import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
import { TasksService } from './tasks.service';

import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  providers: [TasksService],
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];

  constructor(private tasksService: TasksService, private jwt: JwtHelperService) { }

  ngOnInit() {
    this.getTasks();
    //console.log('Tasks: ', this.tasks);    
    //console.log(this.tasks.length);
  }

  getTasks(): void {
    //get logged user id (prop "sub") from token
    let user = this.jwt.decodeToken(localStorage.getItem('token'));

    this.tasksService.get(user.sub).subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addNew(value) {
    this.tasksService.add(value).subscribe(task => {
      this.tasks.push(task);
    });
  }

  update(values) {
    console.log(values);
  }

  delete(id) {
    if (confirm('Do you really want to delete?')) {
      this.tasksService.delete(id).subscribe(task => {
        let index = this.tasks.findIndex(tasks => tasks.id === id);
        this.tasks.splice(index, 1);
      });
    }
  }


}
