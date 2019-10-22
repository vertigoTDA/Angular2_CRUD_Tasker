import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Executor } from '../models/executor.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Task } from '../models/task.model';
import { ExecutorService } from '../employees/executor.service';
import { TaskService } from './task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})

export class CreateTaskComponent implements OnInit {

  @ViewChild('taskForm', { static: false }) public createTaskComponent: NgForm;

  task: Task;

  tasks: Task[];

  executors: Executor[];

  executorId: number;

  datepickerConfig: Partial<BsDatepickerConfig>;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {

    this.datepickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        minDate: new Date(2019, 0, 1),
        dateInputFormat: 'DD/MM/YYYY'
    });

  }

  ngOnInit() {
    this.executors = this.activatedRoute.snapshot.data['executors'];
    this.taskService.getTasks().subscribe(tsk => this.tasks = tsk);
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getTask(id);
  }

  private getTask(id: number){
    if (id ===0) {
      this.task = {
        id: null,
        status: null,
        importance: null,
        date: null,
        deadLine: null,
        creator: null,
        executor: null,
        executorPhotoPath: null,
        title: null,
        taskBody: null,
        notes: null
      }
    } else {
        this.task = this.taskService.getTask(id);
    }
  }

  createNewTask(): void {
    this.taskService.getTasks().subscribe(tsk => this.tasks = tsk);
    this.task.id = this.tasks.length +1;
    this.task.date = new Date();
    this.task.executorPhotoPath = this.executors[this.task.executor - 1].photoPath;
    this.taskService.save(this.task);
    this.router.navigate(['list']);
  }

}
