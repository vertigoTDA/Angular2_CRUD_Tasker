import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

@Injectable()
export class TaskService {
    private listTasks: Task[] = [
        {
            id: 1,
            status: 'active',
            importance: 4,
            date: new Date(),
            creator: 'Boss',
            executor: 1,
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
            executor: 2,
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
            executor: 3,
            title: 'Title from task #3',
            // tslint:disable-next-line: max-line-length
            taskBody: 'Task #3 body Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas ad ipsum maxime commodi similique repudiandae, repellendus illo inventore voluptate reiciendis fugiat sequi incidunt tempora! Quidem error ut natus corporis.'
        }
    ];

    getTasks(): Observable<Task[]> {
        return of(this.listTasks).pipe(delay(2000));
    }

    getTask(id: number): Task {
        console.log(id);
        return this.listTasks.find(e => e.id === id);
    }

    save(task: Task) {
        this.listTasks.push(task);
    }

}
