import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TestingTodosInterface, TestingTodoInterface } from '../testing-todos.interface';

@Injectable()
export class TodosStore {
    private readonly todosSubject$ = new BehaviorSubject<TestingTodosInterface>([])
    public readonly todos$ = this.todosSubject$.asObservable();

    get todos(): TestingTodosInterface {
        return this.todosSubject$.getValue().slice();
    }

    set todos(value: TestingTodosInterface) {
        this.todosSubject$.next(value)
    }

    public getAll(): TestingTodosInterface {
        return this.todos;
    }

    public get(id: number): TestingTodoInterface | null {
        return this.todos.find(t => t.id === id) || null;
    }

    public update(todo: TestingTodoInterface, id: number): void {
        this.upsert(todo, id)
    }

    public add(todo: TestingTodoInterface): void {
        const {id} = todo
        this.upsert(todo, id)
    }

    public delete(id: number): void {
        this.todos = this.todos.filter(t => t.id !== id)
    }

    private upsert(todo: TestingTodoInterface, id: number) {
        const todos = this.todos;
        const index = todos.findIndex(t => t.id === id)

        if (index === -1) {
            todos.push(todo)
        } else {
            todos[index] = {
                ...todos[index],
                ...todo
            }
        }

        this.todos = todos;
    }
}
