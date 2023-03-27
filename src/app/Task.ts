export interface Task {
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}

// The above is a standard to develop an interface in typescript and obviously angular. This is used to set the typeOf that we expect