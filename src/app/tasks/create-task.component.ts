import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Executor } from '../models/executor.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Task } from '../models/task.model';
import { ExecutorService } from '../employees/executor.service';
import { TaskService } from './task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})

export class CreateTaskComponent implements OnInit {

  task: Task = {
    id: null,
    status: null,
    importance: null,
    date: null,
    deadLine: null,
    creator: null,
    executor: null,
    executorPhotoPath: null,
    title: null,
    taskBody: null,
    notes: null
  }

  executors: Executor[];

  executorId: number;

  datepickerConfig: Partial<BsDatepickerConfig>;

  constructor(private _executorService: ExecutorService,
              private _taskService: TaskService,
              private _router: Router) {
    this.datepickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        minDate: new Date(2019, 0, 1),
        dateInputFormat: 'DD/MM/YYYY'
      }
    );
  }

  ngOnInit() {
    this.executors = this._executorService.getExecutors();
  }

  createNewTask(): void {
    this.task.id = this._taskService.getTasks().length + 1;
    this.task.date = new Date();
    this.task.executorPhotoPath = this.executors[this.task.executor -1].photoPath;
    this._taskService.save(this.task);
    this._router.navigate(['list']);
    console.log(this.task);
  }

}
