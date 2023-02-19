import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExampleModule } from './examples/example.module';
import { ErrorInterceptorModule } from './tasks/error-interceptor/error-interceptor.module';
import { TodosModule } from './tasks/todos/todos.module';

@NgModule({
    imports: [
        TodosModule,
        CommonModule,
        ExampleModule,
        // ErrorInterceptorModule
    ],
    exports: [
        TodosModule,
        ExampleModule,
    ]
})
export class Lesson13Module {
}
