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

    getAll$(): Observable<TodosInterface> {
        throw new Error('getAll$ not implemented')
    }

    create$(todo: TodoPayload): Observable<TodoInterface> {
        throw new Error('create$ not implemented')
    }

    update$(todo: TodoPayload, id: number): Observable<TodoInterface> {
        throw new Error('update$ not implemented')
    }

    delete$(id: number): Observable<void> {
        throw new Error('delete$ not implemented')
    }
}
