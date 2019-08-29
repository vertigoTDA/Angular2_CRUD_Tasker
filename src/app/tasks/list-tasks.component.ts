import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../models/task.model';
import { Executor } from '../models/executor.model';
import { TaskService } from './task.service';
import { ExecutorService } from '../employees/executor.service';


@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  tasks: Task[];

  executors: Executor[];

  constructor(
    private _taskService: TaskService,
    private _executorService: ExecutorService,
    private _router: Router
  ) { }


  ngOnInit() {
    this.tasks = this._taskService.getTasks();
    this.executors = this._executorService.getExecutors();
  }

  viewTaskInfo(taskId: number): void {
    this._router.navigate(['/task', taskId]);
  }

}
