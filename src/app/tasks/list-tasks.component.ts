import { Component, OnInit } from '@angular/core';
import { ActivationEnd } from '@angular/router';
import { BrowserStack } from 'protractor/built/driverProviders';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {
  tasks: Task[] = [
    {
      id: 1,
      status: 'active',
      importance: 4,
      date: new Date(),
      creator: 'Boss',
      executor: 'Employee #1',
      title: 'Title from task #1',
      // tslint:disable-next-line: max-line-length
      taskBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas ad ipsum maxime commodi similique repudiandae, repellendus illo inventore voluptate reiciendis fugiat sequi incidunt tempora! Quidem error ut natus corporis.'
    },
    {
      id: 2,
      status: 'done',
      importance: 3,
      date: new Date(),
      creator: 'Boss',
      executor: 'Employee #2',
      title: 'Title from task #2',
      // tslint:disable-next-line: max-line-length
      taskBody: 'Task #2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas ad ipsum maxime commodi similique repudiandae, repellendus illo inventore voluptate reiciendis fugiat sequi incidunt tempora! Quidem error ut natus corporis.',
      notes: 'Some notes'
    },
    {
      id: 3,
      status: 'deleted',
      importance: 2,
      date: new Date(),
      creator: 'Boss',
      executor: 'Employee #1',
      title: 'Title from task #3',
      // tslint:disable-next-line: max-line-length
      taskBody: 'Task #3 body Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas ad ipsum maxime commodi similique repudiandae, repellendus illo inventore voluptate reiciendis fugiat sequi incidunt tempora! Quidem error ut natus corporis.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
