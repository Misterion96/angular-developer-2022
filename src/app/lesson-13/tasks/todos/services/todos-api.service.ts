import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoInterface, TodoPayload, TodosInterface } from '../todos.interface';
import { TodosUriService } from './todos-uri.service';

@Injectable()
export class TodosApiService {

    constructor(
        private readonly uriService: TodosUriService,
    ) {
    }

    // https://jsonplaceholder.typicode.com/

    getAll$(): Observable<TodosInterface> {
        throw new Error('getAll$ not implemented')
    }

    create$(todo: TodoPayload): Observable<TodoInterface> {
        // this.http.post -> TODO_URL(todo.id), body: {todo}
        throw new Error('create$ not implemented')
    }

    update$(todo: TodoPayload, id: number): Observable<TodoInterface> {
        // this.http.put -> TODO_URL(todo.id), body: {todo}
        throw new Error('update$ not implemented')
    }

    delete$(id: number): Observable<void> {
        // this.http.delete -> TODO_URL(todo.id)
        throw new Error('delete$ not implemented')
    }
}
