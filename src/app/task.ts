export class Task {
    /*id: number;
    task: string;
    is_priority: boolean;
    is_done: boolean;
    user_id: number;*/

    constructor(
        public task: string,
        public id?: number,
        public is_priority?: boolean,
        public is_done?: boolean,
        public user_id?: number
    ) { }
}