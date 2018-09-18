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
  newTask = new Task('');
  isEditable: boolean = false;

  constructor(private tasksService: TasksService, private jwt: JwtHelperService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    //get logged user id (prop "sub") from token
    let user = this.jwt.decodeToken(localStorage.getItem('token'));

    this.tasksService.get(user.sub).subscribe(tasks => {
      this.tasks = tasks;
    });
  }


  store() {
    this.tasksService.add(this.newTask).subscribe(task => {
      this.tasks.push(task);
    });
    this.newTask = new Task('');
  }

  edit(id, task) {
    this.isEditable = true;
    this.newTask = new Task(task, id);
  }

  update() {
    this.tasksService.update(this.newTask.id, this.newTask).subscribe(task => {
      this.cancelEdit();
      let index = this.tasks.findIndex(tasks => tasks.id === task.id);
      this.tasks.splice(index, 1);
      this.tasks.splice(index, 0, task);
    })
  }

  cancelEdit() {
    this.isEditable = false;
    this.newTask = new Task('');
  }

  updateIsDone(id, isDone) {
    this.tasksService.update(id, { is_done: !isDone }).subscribe(task => {

    })
  }
  updateIsPriority(id, isPriority) {
    this.tasksService.update(id, { is_priority: !isPriority }).subscribe();
  }

  delete(id) {
    if (confirm('Do you really want to delete?')) {
      this.tasksService.delete(id).subscribe(task => {
        let index = this.tasks.findIndex(tasks => tasks.id === id);
        this.tasks.splice(index, 1);
        this.cancelEdit();
      });
    }
  }


}
