import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task.model';
import { Executor } from '../models/executor.model';
import { ExecutorService } from '../employees/executor.service';

@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css']
})
export class DisplayTaskComponent implements OnInit {

  @Input() task: Task;

  executors: Executor[];

  constructor(private _executorService: ExecutorService) { }

  ngOnInit() {
    this.executors = this._executorService.getExecutors();
  }

}
