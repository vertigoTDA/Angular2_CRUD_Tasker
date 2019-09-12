import { Injectable } from '@angular/core';
import { Executor } from '../models/executor.model';

@Injectable()
export class ExecutorService {
    private listExecutors: Executor[] = [
        { id: 1, name: 'Executor#1', photoPath: 'assets/images/1.png' },
        { id: 2, name: 'Executor#2', photoPath: 'assets/images/2.png' },
        { id: 3, name: 'Executor#3', photoPath: 'assets/images/3.png' },
        { id: 4, name: 'Executor#4', photoPath: 'assets/images/4.png' },
        { id: 5, name: 'Executor#5', photoPath: 'assets/images/5.png' }
      ];

    getExecutors(): Executor[] {
        return this.listExecutors;
    }
}
