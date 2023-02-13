import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiAutoFocusModule, TuiLetModule } from '@taiga-ui/cdk';
import { TuiButtonModule, TuiGroupModule, TuiLoaderModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import {
    TuiCheckboxLabeledModule,
    TuiCheckboxModule,
    TuiInputInlineModule, TuiInputModule,
    TuiIslandModule,
    TuiLineClampModule
} from '@taiga-ui/kit';
import { TodosApiService } from './services/todos-api.service';
import { TodosUriService } from './services/todos-uri.service';
import { TodosService } from './services/todos.service';
import { TodosStore } from './services/todos.store';
import { TodosComponent } from './todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';

@NgModule({
    declarations: [TodosComponent, TodoItemComponent, CreateTodoComponent],
    imports: [
        CommonModule,
        TuiIslandModule,
        TuiCheckboxModule,
        FormsModule,
        TuiCheckboxLabeledModule,
        TuiButtonModule,
        TuiInputInlineModule,
        TuiAutoFocusModule,
        TuiLineClampModule,
        TuiLoaderModule,
        TuiGroupModule,
        TuiInputModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
        TuiLetModule,
    ],
    exports: [
        TodosComponent
    ],
    providers: [
        TodosService,
        TodosStore,
        TodosApiService,
        TodosUriService,
        FormBuilder
    ]
})
export class TodosModule {}
