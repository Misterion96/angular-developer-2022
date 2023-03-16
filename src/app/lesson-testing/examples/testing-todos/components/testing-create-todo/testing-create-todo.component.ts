import { Component, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs';

@Component({
    selector: 'app-testing-create-todo',
    templateUrl: './testing-create-todo.component.html',
    styleUrls: ['./testing-create-todo.component.less']
})
export class TestingCreateTodoComponent {
    public readonly group = new FormGroup({
        title: new FormControl<string>('')
    }, {updateOn: 'submit'})

    @Output()
    public readonly createTodo = this.group.valueChanges.pipe(
        map(({title}) => title)
    )

}
