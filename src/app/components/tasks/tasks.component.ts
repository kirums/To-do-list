import { Component } from '@angular/core';
import { Task } from 'src/app/Task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = []; //to begin with it is going to be an empty array. Also, Task interface is of type array.

  constructor(private taskService : TasksService ){}

  ngOnInit(): void{
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks = tasks;
    })
  }
}
// in the class we have name tasks to represent what is in our mock DB, TASKS which takes a interface Task in array.

