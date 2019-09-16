import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Executor } from '../models/executor.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Task } from '../models/task.model';
import { ExecutorService } from '../employees/executor.service';
import { TaskService } from './task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})

export class CreateTaskComponent implements OnInit {

  @ViewChild('taskForm', { static: false }) public createTaskComponent: NgForm;

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
  };

  tasks: Task[];

  executors: Executor[];

  executorId: number;

  datepickerConfig: Partial<BsDatepickerConfig>;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.datepickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        minDate: new Date(2019, 0, 1),
        dateInputFormat: 'DD/MM/YYYY'
    });


  }

  ngOnInit() {
    this.executors = this.activatedRoute.snapshot.data['executors'];
    this.taskService.getTasks().subscribe(tsk => this.tasks = tsk);
  }

  createNewTask(): void {
    this.taskService.getTasks().subscribe(tsk => this.tasks = tsk);
    console.log(this.tasks);
    console.log(this.executors);
    this.task.id = this.tasks.length +1;
    this.task.date = new Date();
    console.log();
    this.task.executorPhotoPath = this.executors[this.task.executor - 1].photoPath;
    console.log();
    this.taskService.save(this.task);
    console.log();
    this.router.navigate(['list']);
  }

}
