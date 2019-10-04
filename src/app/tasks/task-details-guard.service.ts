import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { TaskService } from './task.service';

@Injectable()
export class TaskDetaislGuardService implements CanActivate {
    constructor(private taskService: TaskService, private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const taskExist = !!this.taskService.getTask(+route.paramMap.get('id'));

        if (taskExist) {
            return true;
        } else {
            this.router.navigate(['notfound']);
            return false;
        }
    }
}
