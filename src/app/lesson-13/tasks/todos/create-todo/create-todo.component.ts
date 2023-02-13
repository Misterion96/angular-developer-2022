import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoPayload } from '../todos.interface';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.less']
})
export class CreateTodoComponent{
  constructor(
      private readonly fb: FormBuilder
  ) {
  }
  public readonly form = this.fb.group<TodoPayload>({
    title: '',
    completed: false
  })

  @Output()
  public readonly createTodo = new EventEmitter<TodoPayload>()

  public onSubmit(): void {
    this.createTodo.emit(this.form.value as TodoPayload)
  }
}
