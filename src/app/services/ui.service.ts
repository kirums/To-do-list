import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject();

  constructor() { }

  //We are creating a function to toggle that value - showAddTask
  toggleAddTask(): void{
    //Since we don't expect this function to return anything, we have declared it as type void.
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
    // console.log(123);
    // the .next() method is meant to organise the current value set of the this.showAddTask property
  }

  //next method is an observable that fires off when the toggle is made
  ontoggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
