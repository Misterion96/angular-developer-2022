import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoInterface, TodosInterface } from '../todos.interface';

@Injectable()
export class TodosStore {
    private readonly todosSubject$ = new BehaviorSubject<TodosInterface>([])
    public readonly todos$ = this.todosSubject$.asObservable();

    get todos(): TodosInterface {
        return this.todosSubject$.getValue().slice();
    }

    set todos(value: TodosInterface) {
        this.todosSubject$.next(value)
    }

    public getAll(): TodosInterface {
        return this.todos;
    }

    public get(id: number): TodoInterface | null {
        return this.todos.find(t => t.id === id) || null;
    }

    public update(todo: TodoInterface, id: number): void {
        this.upsert(todo, id)
    }

    public add(todo: TodoInterface): void {
        const {id} = todo
        this.upsert(todo, id)
    }

    public delete(id: number): void {
        this.todos = this.todos.filter(t => t.id !== id)
    }

    private upsert(todo: TodoInterface, id: number) {
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
