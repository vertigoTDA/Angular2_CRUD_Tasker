import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Task } from '../models/task.model';
import { TaskService } from './task.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskListResolverService implements Resolve<Task[]> {

  constructor(private taskService: TaskService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Task[]> {
    return this.taskService.getTasks();
  }
}
