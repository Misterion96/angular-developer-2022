import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TodosService } from './services/todos.service';
import { TestingTodoInterface, TestingTodoPayload } from './testing-todos.interface';

@Component({
  selector: 'app-testing-todos',
  templateUrl: './testing-todos.component.html',
  styleUrls: ['./testing-todos.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingTodosComponent implements OnInit {
  public readonly todos$ = this.todoService.todos$;
  public readonly loading$ = this.todoService.loading$;

  constructor(
      private readonly todoService: TodosService
  ) { }

  public ngOnInit(): void {
    this.todoService.getAll();
  }

  trackByTodo(_: number, todo: TestingTodoInterface): string {
    return `${todo.title}${todo.completed}`
  }

  public onUpdateTodo($event: TestingTodoPayload, id: number): void {
    this.todoService.update($event, id)
  }

  public onDeleteTodo($event: number): void {
    this.todoService.delete($event)
  }

  public onCreate($event: string): void {
    this.todoService.create({
      title: $event,
      completed: false
    })
  }
}
