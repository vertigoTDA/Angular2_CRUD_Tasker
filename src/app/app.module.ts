import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { TaskService } from './tasks/task.service';
import { ExecutorService } from './employees/executor.service';
import { CreateTaskDeactivateGuardService } from './tasks/create-task-can-deactivate-guard.service';
import { ExecutorResolverService } from './employees/executor-resolver.service';
import { TaskDetaislGuardService } from './tasks/task-details-guard.service';

import { AppComponent } from './app.component';
import { ListTasksComponent } from './tasks/list-tasks.component';
import { HomeComponent } from './tasks/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateTaskComponent } from './tasks/create-task.component';
import { RecycleComponent } from './tasks/recycle.component';
import { TaskDetailsComponent } from './tasks/task-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTasksComponent,
    HomeComponent,
    PageNotFoundComponent,
    CreateTaskComponent,
    RecycleComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    TaskService,
    ExecutorService,
    CreateTaskDeactivateGuardService,
    ExecutorResolverService,
    TaskDetaislGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
