import { Task } from './Task';

//so now we can import the typeOf that we expect and use it below. If it was a single object we wouldn't recquire the []. But since it is an array of objects we have to.
// Incase we add any other thing to the object we would get an error <Object literal may only specify known properties, and 'time' does not exist in type 'Task'.ts(2322)> If we need to add any more fields we modify the interface.

export const TASKS: Task[] = [
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'May 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: 'May 6th at 1:30pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'May 7th at 12:30pm',
    reminder: false,
  },
];