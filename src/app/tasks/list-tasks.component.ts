import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  tasks: Task[];

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this._taskService.getTasks();
  }

}
