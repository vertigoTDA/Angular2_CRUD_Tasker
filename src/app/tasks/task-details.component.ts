import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../models/task.model';
import { Executor } from '../models/executor.model';

import { TaskService } from './task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  task: Task;

  executors: Executor[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private taskService: TaskService,
  ) {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.task = this.taskService.getTask(id);
    this.executors = this.activatedRoute.snapshot.data['executors'];
  }

  ngOnInit() {}

}
