import { CanDeactivate } from '@angular/router';
import { CreateTaskComponent } from './create-task.component';
import { Injectable } from '@angular/core';

@Injectable()
export class CreateTaskDeactivateGuardService implements CanDeactivate<CreateTaskComponent> {
    canDeactivate(component: CreateTaskComponent): boolean {
        if (component.createTaskComponent.dirty && !component.createTaskComponent.submitted){
            return confirm('Are you sure? You lose all data.');
        }
        return true;
    }
}