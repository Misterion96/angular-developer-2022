import { NgModule } from '@angular/core';
import { TestingTodosModule } from './examples/testing-todos/testing-todos.module';

@NgModule({
    declarations: [],
    imports: [
        TestingTodosModule
    ],
    exports: [
        TestingTodosModule
    ]
})
export class LessonTestingModule {}
