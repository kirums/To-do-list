import { Component, Input, Output, EventEmitter} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  onDelete(task: Task){
    // console.log(`${task.text}`)
    this.onDeleteTask.emit(task)
  };

  onToggle(task: Task){
    // console.log(`${task.text}`)
    this.onToggleReminder.emit(task)
  };
  
}
