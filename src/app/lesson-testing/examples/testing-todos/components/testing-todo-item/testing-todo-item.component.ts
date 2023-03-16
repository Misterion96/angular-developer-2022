import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TestingTodoPayload } from '../../testing-todos.interface';

type TodoGroup<T extends TestingTodoPayload = TestingTodoPayload> = {
  [key in keyof TestingTodoPayload]: AbstractControl<TestingTodoPayload[key]>
}
@Component({
  selector: 'app-testing-todo-item',
  templateUrl: './testing-todo-item.component.html',
  styleUrls: ['./testing-todo-item.component.less']
})
export class TestingTodoItemComponent implements OnInit {
  public formGroupTodo = new FormGroup<TodoGroup>({
    title: new FormControl(''),
    completed: new FormControl(false)
  });

  private readonly value$: Observable<TestingTodoPayload> = this.formGroupTodo.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(v => v as TestingTodoPayload)
  );

  @Input()
  public todo!: TestingTodoPayload

  @Output()
  public readonly todoDelete = new EventEmitter<void>()

  @Output()
  public readonly todoChange = this.value$

  ngOnInit(): void {
    const {title, completed} = this.todo;

    this.formGroupTodo.setValue({
      title, completed
    }, {emitEvent: false})
  }

  public onClickDelete(): void {
    this.todoDelete.emit()
  }
}
