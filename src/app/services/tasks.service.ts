import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Task';
// import { TASKS } from '../mock-task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  //this is required when sending out data.
  headers: new HttpHeaders({
    'Content-type':'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl = "http://localhost:5000/tasks";

  constructor(private http:HttpClient ) { }

  getTasks(): Observable<Task[]> {
    // const tasks = of(TASKS);
    // return tasks;
    //The above logic was because of importing from a file. Below we will be importing from http. Because HTTP returns an observable we wont use 'of'
    return this.http.get<Task[]>(this.apiUrl);

  }

  deleteTask(task: Task): Observable<Task>{
    //in delete task method we are only removing single items. Therefore type is singulat and url has id in it.
    const url =`${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  toggleReminder(task: Task): Observable<Task>{
    const url =`${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
    //the above returned values are necessary to make a put request. They include a url with specific id, specific id data that is updated and httpOptions for the content-type definition.
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}

// In this service we define a function getTasks to handle and return TASKS from the ServiceWorkerRegistration. This function is easily exported from this class. Anywhere the service is imported we can access the function
//Function type can also be declared as shown above
