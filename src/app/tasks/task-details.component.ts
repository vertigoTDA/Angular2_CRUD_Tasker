import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../models/task.model';
import { Executor } from '../models/executor.model';

import { TaskService } from './task.service';
import { ExecutorService } from '../employees/executor.service';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  task: Task;

  executors: Executor[];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _taskService: TaskService,
    private _executorService: ExecutorService
  ) { }

  ngOnInit() {
    const id = +this._activatedRoute.snapshot.paramMap.get('id');
    this.task = this._taskService.getTask(id);
    this.executors = this._executorService.getExecutors();
    console.log('ngOninit: ' + this.task);
  }

}
