import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  providers: [TasksService],
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.getTasks();
    //console.log('Tasks: ', this.tasks);
  }

  getAllTasks(): void {
    this.tasksService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
      //console.log('TASKSSS: ', tasks);
    });
  }

  getTasks(): void {
    this.tasksService.get(1).subscribe(tasks => {
      this.tasks = tasks;
    });
  }


}
