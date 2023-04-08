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

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    })
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() =>
      this.tasks = this.tasks.filter((t) => t.id !== task.id)
      //This is to ensure that the item is removed from the UI.
    );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    //this just changes the boolean of the reminder property.
    this.taskService.toggleReminder(task).subscribe()
    //the subscribe is not used here because we aren't getting any data but updating it.
  }
  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    })
  }
}
// in the class we have name tasks to represent what is in our mock DB, TASKS which takes a interface Task in array.