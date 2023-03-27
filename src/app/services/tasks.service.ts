import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { TASKS } from '../mock-task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}

// In this service we define a function getTasks to handle and return TASKS from the ServiceWorkerRegistration. This function is easily exported from this class. Anywhere the service is imported we can access the function
//Function type can also be declared as shown above
