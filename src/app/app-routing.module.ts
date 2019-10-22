import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './tasks/home.component';
import { ListTasksComponent } from './tasks/list-tasks.component';
import { TaskDetailsComponent } from './tasks/task-details.component';
import { CreateTaskComponent } from './tasks/create-task.component';
import { RecycleComponent } from './tasks/recycle.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { CreateTaskDeactivateGuardService } from './tasks/create-task-can-deactivate-guard.service';
import { TaskListResolverService } from './tasks/task-list-resolver.service';
import { ExecutorResolverService } from './employees/executor-resolver.service';
import { TaskDetaislGuardService } from './tasks/task-details-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'list',
    component: ListTasksComponent,
    resolve: {
      taskList: TaskListResolverService,
      executors: ExecutorResolverService
    }
  },
  {
    path: 'task/:id',
    component: TaskDetailsComponent,
    canActivate: [TaskDetaislGuardService],
    resolve: {
      taskList: TaskListResolverService,
      executors: ExecutorResolverService
    }
  },
  {
    path: 'edit/:id',
    component: CreateTaskComponent,
    canDeactivate: [CreateTaskDeactivateGuardService],
    resolve: {
      executors: ExecutorResolverService
    }
  },
  { path: 'recycle', component: RecycleComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'notfound',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
