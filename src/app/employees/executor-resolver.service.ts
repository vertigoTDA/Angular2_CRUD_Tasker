import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Executor } from '../models/executor.model';
import { ExecutorService } from './executor.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExecutorResolverService implements Resolve<Executor[]> {

  constructor(private executorService: ExecutorService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Executor[]> {
    return this.executorService.getExecutors();
  }
}
