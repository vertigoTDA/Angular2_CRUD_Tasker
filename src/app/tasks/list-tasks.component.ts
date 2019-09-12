import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from '../models/task.model';
import { Executor } from '../models/executor.model';
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
    this.filteredTasks = this.filterTasks(value);
  }

  filterTasks(value: string) {
    return this.tasks.filter(task =>
      task.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  constructor(
    private executorService: ExecutorService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.tasks = this.route.snapshot.data['taskList'];
    if (this.route.snapshot.queryParamMap.has('searchTerm')) {
      this.searchTerm = this.route.snapshot.queryParamMap.get('searchTerm');
    } else {
      this.filteredTasks = this.tasks;
    }
  }


  ngOnInit() {
    this.executors = this.executorService.getExecutors();
  }

  viewTaskInfo(taskId: number): void {
    this.router.navigate(['/task', taskId], {
      queryParams: { 'searchTerm': this.searchTerm }
    });
  }
}
