import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TodosService } from './services/todos.service';
import { TodoInterface, TodoPayload } from './todos.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent implements OnInit {
  public readonly todos$ = this.todoService.todos$;
  public readonly loading$ = this.todoService.loading$;

  constructor(
      private readonly todoService: TodosService
  ) { }

  public ngOnInit(): void {
    this.todoService.getAll();
  }

  trackByTodo(_: number, todo: TodoInterface): string {
    return `${todo.title}${todo.completed}`
  }

  public onUpdateTodo($event: TodoInterface, id: number): void {
    this.todoService.update($event, id)
  }

  public onDeleteTodo($event: number): void {
    this.todoService.delete($event)
  }

  public onCreate($event: TodoPayload): void {
    this.todoService.create($event)
  }
}
