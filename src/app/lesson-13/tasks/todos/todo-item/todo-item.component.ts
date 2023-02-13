import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { isEqual } from 'lodash';
import { TodoInterface } from '../todos.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  _initialTodoValue: TodoInterface | null = null;
  _todo: TodoInterface | null = null;
  editing = false;
  changed = false;

  @Input() set todo(v: TodoInterface){
    this._initialTodoValue = {...v};
    this._todo = {...this._initialTodoValue};
  }

  @Output()
  public readonly updateTodo = new EventEmitter<TodoInterface>();

  @Output()
  public readonly deleteTodo = new EventEmitter<TodoInterface>();

  get todo(){
    return this._todo
  }

  public onCompleteChange(): void {
    this.checkDiffers();
  }

  private checkDiffers(): void {
    this.changed = !isEqual(this._initialTodoValue, this._todo);
  }

  public toggle(): void {
    this.editing = !this.editing;
    this.checkDiffers();
  }

  public onFocusedChange(focused: boolean): void {
    if (!focused) {
      this.editing = false;
      this.checkDiffers();
    }
  }
}
