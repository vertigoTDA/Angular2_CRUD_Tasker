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

  executors: Executor[];

  tasks: Task[];
  
  filteredTasks: Task[];

  private _searchTerm: string;

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    console.log('value: ' + this._searchTerm);
    this.filteredTasks = this.filterTasks(value);
    console.log('set:' + this.filteredTasks);
  }

  filterTasks(value: string) {
    return this.tasks.filter(task =>
      task.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  constructor(
    private taskService: TaskService,
    private executorService: ExecutorService,
    private router: Router
  ) { }


  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.filteredTasks = this.tasks;
    this.executors = this.executorService.getExecutors();
  }

  viewTaskInfo(taskId: number): void {
    this.router.navigate(['/task', taskId]);
  }

}
