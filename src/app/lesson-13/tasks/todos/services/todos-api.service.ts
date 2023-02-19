import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoInterface, TodoPayload, TodosInterface } from '../todos.interface';
import { TodosUriService } from './todos-uri.service';

@Injectable()
export class TodosApiService {

    constructor(
        private readonly uriService: TodosUriService,
        private readonly httpClient: HttpClient,
    ) {
    }

    // https://jsonplaceholder.typicode.com/

    getAll$(): Observable<TodosInterface> {
        return this.httpClient.get<TodosInterface>(this.uriService.TODOS_URL)
    }

    create$(todo: TodoPayload): Observable<TodoInterface> {
       return this.httpClient.post<TodoInterface>(this.uriService.TODOS_URL, todo)
    }

    update$(todo: TodoPayload, id: number): Observable<TodoInterface> {
        return this.httpClient.put<TodoInterface>(this.uriService.TODO_URL(id), todo)
    }

    delete$(id: number): Observable<void> {
        return this.httpClient.delete<void>(this.uriService.TODO_URL(id))
    }
}
