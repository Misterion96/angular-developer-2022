import { Injectable } from '@angular/core';
import { LoadingService } from '../../../../services/loading.service';
import { TestingTodoPayload } from '../testing-todos.interface';
import { TodosApiService } from './todos-api.service';
import { TodosStore } from './todos.store';

@Injectable()
export class TodosService {
    public readonly todos$ = this.todosStore.todos$;
    private readonly loadingService: LoadingService = new LoadingService();

    public readonly loading$ = this.loadingService.loading$;

    constructor(
        private readonly todoApi: TodosApiService,
        private readonly todosStore: TodosStore,
    ) {
    }

    getAll(): void {
        const request = this.todoApi.getAll$();

        this.loadingService.showLoaderUntilCompleted(request).subscribe(
            r => this.todosStore.todos = r.slice(0, 10)
        )
    }

    update(todoChanges: TestingTodoPayload, id: number): void {
        const request = this.todoApi.update$(todoChanges, id)

        this.loadingService.showLoaderUntilCompleted(request).subscribe(
            (r) => this.todosStore.update(r, id)
        )
    }

    delete(id: number): void {
        const request = this.todoApi.delete$(id)

        this.loadingService.showLoaderUntilCompleted(request).subscribe(
            () => this.todosStore.delete(id)
        )
    }

    create(todoPayload: TestingTodoPayload): void {
        const request = this.todoApi.create$(todoPayload)

        this.loadingService.showLoaderUntilCompleted(request).subscribe(
            (todo) => this.todosStore.add(todo)
        )
    }
}
