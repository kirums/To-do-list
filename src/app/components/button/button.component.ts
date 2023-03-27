import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text!:string;
  @Input() color!:string;
  
  @Output() btnClick = new EventEmitter; 

  onClick(){
    this.btnClick.emit();
  }
}

// In the import section, we are importing modules that would enable success of this module. 
// Component handling the component structure - the component decorator
// Input - input decorator which handles all the input attributes of this reusable Component. 
// Output - Which now handles anything being put out from this Component. The above example would show the event that is being emitted. 