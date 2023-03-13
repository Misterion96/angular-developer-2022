import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoPayload } from '../../todos.interface';

type TodoGroup<T extends TodoPayload = TodoPayload> = {
  [key in keyof TodoPayload]: AbstractControl<TodoPayload[key]>
}
@Component({
  selector: 'app-testing-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.less']
})
export class TestingTodoItemComponent implements OnInit {
  public formGroupTodo = new FormGroup<TodoGroup>({
    title: new FormControl(''),
    completed: new FormControl(false)
  });

  private readonly value$: Observable<TodoPayload> = this.formGroupTodo.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(v => v as TodoPayload)
  );

  @Input()
  public todo!: TodoPayload

  @Output()
  public readonly todoDelete = new EventEmitter<void>()

  @Output()
  public todoChange = this.value$

  ngOnInit(): void {
    const {title, completed} = this.todo;

    this.formGroupTodo.setValue({
      title, completed
    }, {emitEvent: false})
  }
}
