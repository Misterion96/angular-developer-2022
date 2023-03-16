import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestingTodoInterface, TestingTodoPayload, TestingTodosInterface } from '../testing-todos.interface';
import { TodosUriService } from './todos-uri.service';

@Injectable()
export class TodosApiService {

    constructor(
        private readonly uriService: TodosUriService,
        private readonly httpClient: HttpClient,
    ) {
    }


    public get apiUrl(): string {
        return this.uriService.TODOS_URL
    }

    getAll$(): Observable<TestingTodosInterface> {
        return this.httpClient.get<TestingTodosInterface>(this.uriService.TODOS_URL)
    }

    create$(todo: TestingTodoPayload): Observable<TestingTodoInterface> {
       return this.httpClient.post<TestingTodoInterface>(this.uriService.TODOS_URL, todo)
    }

    update$(todo: TestingTodoPayload, id: number): Observable<TestingTodoInterface> {
        return this.httpClient.put<TestingTodoInterface>(this.uriService.TODO_URL(id), todo)
    }

    delete$(id: number): Observable<void> {
        return this.httpClient.delete<void>(this.uriService.TODO_URL(id))
    }
}
