import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTasksComponent } from './tasks/list-tasks.component';
import { HomeComponent } from './tasks/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateTaskComponent } from './tasks/create-task.component';
import { RecycleComponent } from './tasks/recycle.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTasksComponent,
    HomeComponent,
    PageNotFoundComponent,
    CreateTaskComponent,
    RecycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
