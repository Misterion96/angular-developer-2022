import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TODOS_API_TOKEN } from './todos-api.token';
import { TodosInterface, TodoInterface } from './todos.interface';

@Injectable()
export class TodosApiService {
    constructor(
        private readonly httpClient: HttpClient,
        @Inject(TODOS_API_TOKEN)
        private readonly todosApiUrl: string
    ) {
    }

    public get apiUrl(): string {
        return `${this.todosApiUrl}/todos`;
    }

    getAll(): Observable<TodosInterface> {
        return this.httpClient.get<TodosInterface>(this.apiUrl)
    }

    get(id: number): Observable<TodoInterface> {
        return this.httpClient.get<TodoInterface>(`${this.apiUrl}/${id}`)
    }

    create(todo: Pick<TodoInterface, 'title' | 'completed'>): Observable<TodoInterface> {
        return this.httpClient.post<TodoInterface>(this.apiUrl, todo)
    }

    update(
        id: number,
        changes: Pick<TodoInterface, 'title' | 'completed'>
    ): Observable<TodoInterface> {
        return this.httpClient.put<TodoInterface>(`${this.apiUrl}/${id}`, changes)
    }

    delete(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.apiUrl}/${id}`)
    }
}
