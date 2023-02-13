import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExampleModule } from './examples/example.module';
import { TodosModule } from './tasks/todos/todos.module';

@NgModule({
    imports: [
        TodosModule,
        CommonModule,
        ExampleModule,
    ],
    exports: [
        TodosModule,
        ExampleModule
    ]
})
export class Lesson13Module {
}
