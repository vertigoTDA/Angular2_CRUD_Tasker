import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './tasks/home.component';
import { ListTasksComponent } from './tasks/list-tasks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateTaskComponent } from './tasks/create-task.component';
import { RecycleComponent } from './tasks/recycle.component';

import { CreateTaskDeactivateGuardService } from './tasks/create-task-can-deactivate-guard.service';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListTasksComponent },
  {
    path: 'newTask',
    component: CreateTaskComponent,
    canDeactivate: [CreateTaskDeactivateGuardService]
  },
  { path: 'recycle', component: RecycleComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
