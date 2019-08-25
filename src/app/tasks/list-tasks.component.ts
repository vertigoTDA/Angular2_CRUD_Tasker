import { Component, OnInit } from '@angular/core';
import { ActivationEnd } from '@angular/router';
import { BrowserStack } from 'protractor/built/driverProviders';
import { Task } from '../models/task.model';
import { TaskService } from './task.service';
import { Executor } from '../models/executor.model';
import { ExecutorService } from '../employees/executor.service';



@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  tasks: Task[];

  executors: Executor[];

  constructor(private _taskService: TaskService,
              private _executorService: ExecutorService) { }

  ngOnInit() {
    this.tasks = this._taskService.getTasks();
    this.executors = this._executorService.getExecutors();
  }

}
