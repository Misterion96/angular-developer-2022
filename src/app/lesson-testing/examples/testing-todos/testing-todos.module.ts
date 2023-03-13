import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiButtonModule, TuiLoaderModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiCheckboxLabeledModule, TuiInputModule } from '@taiga-ui/kit';
import { TestingCreateTodoComponent } from './components/testing-create-todo/testing-create-todo.component';
import { TestingTodoItemComponent } from './components/testing-todo-item/testing-todo-item.component';
import { TodosApiService } from './services/todos-api.service';
import { TodosUriService } from './services/todos-uri.service';
import { TodosService } from './services/todos.service';
import { TodosStore } from './services/todos.store';
import { TestingTodosComponent } from './testing-todos.component';

@NgModule({
    declarations: [TestingTodosComponent, TestingCreateTodoComponent, TestingTodoItemComponent],
    imports: [
        ReactiveFormsModule,
        TuiInputModule,
        TuiTextfieldControllerModule,
        TuiButtonModule,
        CommonModule,
        TuiCheckboxLabeledModule,
        TuiLoaderModule,
        TuiLetModule

    ],
    exports: [
        TestingCreateTodoComponent,
        TestingTodosComponent
    ],
    providers: [
        TodosService,
        TodosStore,
        TodosApiService,
        TodosUriService,
    ]
})
export class TestingTodosModule {}
