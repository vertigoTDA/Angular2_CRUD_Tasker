import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Executor } from '../models/executor.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

datepickerConfig: Partial<BsDatepickerConfig>;

  executors: Executor[] = [
    { id: 1, name: 'Executor#1' },
    { id: 2, name: 'Executor#2' },
    { id: 3, name: 'Executor#3' },
    { id: 4, name: 'Executor#4' },
    { id: 5, name: 'Executor#5' }
  ]

  constructor() {
    this.datepickerConfig = Object.assign({}, 
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        minDate: new Date(2019, 0, 1),
        dateInputFormat: 'DD/MM/YYYY'
      });
   }

  ngOnInit() {
  }

  createNewTask(createForm: NgForm): void {
    console.log(createForm.value);
  }
}
