import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Executor } from '../models/executor.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { exec } from 'child_process';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})

export class CreateTaskComponent implements OnInit {

  executors: Executor[] = [
    { id: 1, name: 'Executor#1', photoPath: 'assets/images/1.png' },
    { id: 2, name: 'Executor#2', photoPath: 'assets/images/2.png' },
    { id: 3, name: 'Executor#3', photoPath: 'assets/images/3.png' },
    { id: 4, name: 'Executor#4', photoPath: 'assets/images/4.png' },
    { id: 5, name: 'Executor#5', photoPath: 'assets/images/5.png' }
  ];

  executorPhotoPath: string;

  datepickerConfig: Partial<BsDatepickerConfig>;

  constructor() {
    this.datepickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        minDate: new Date(2019, 0, 1),
        dateInputFormat: 'DD/MM/YYYY'
      }
    );
  }

  ngOnInit() {
  }

  createNewTask(createForm: NgForm): void {
    console.log(createForm.value);
    console.log(createForm.value.executor);
  }

}
