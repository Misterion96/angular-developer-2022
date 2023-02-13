import { Injectable } from '@angular/core';

@Injectable()
export class TodosUriService {
    private readonly host = 'https://jsonplaceholder.typicode.com/todos'
    get TODOS_URL(){
        return `${this.host}`
    }

    public TODO_URL (id): string {
        return `${this.TODOS_URL}/${id}`
    }
}
