import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean = false;

  subscription!: Subscription;
  showAddTask!: boolean;

  //Below is supposed to toggle the form.
  constructor(private uiService: UiService){
    this.subscription = this.uiService.ontoggle().subscribe(value => this.showAddTask = value);
  }



  onSubmit(){
    //onSubmit there will be the following 4 activities:
    //1. Validation
    if(!this.text){
      alert('Please input task');
      return;
    }
    if(!this.day){
      alert('Please input day');
      return;
    }
    //2. Record the new task - Two way binding
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    }

    //So what we want to do is make sure that all the submitted content in new task is captured when the onSubmit
    //3. The new task recorded is emitted to the task component with the $event.
    this.onAddTask.emit(newTask);

    //since we need to clear the form right after...we need to declare these properties to a default status after submission.
    //4. Clear the form.
    this.text = '';
    this.day = '';
    this.reminder = false;

  }
}
