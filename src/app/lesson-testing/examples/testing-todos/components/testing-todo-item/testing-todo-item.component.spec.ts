import { CommonModule } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiButtonModule, TuiLoaderModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiCheckboxLabeledModule, TuiInputModule } from '@taiga-ui/kit';
import { TestingTodoPayload } from '../../testing-todos.interface';
import { TestingTodoItemComponent } from './testing-todo-item.component';

describe('TestingTodoItemComponent', () => {
    let fixture: ComponentFixture<TestingTodoItemComponent>
    let component: TestingTodoItemComponent
    const TODO: TestingTodoPayload = {title: 'TODO_TITLE', completed: false}

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TestingTodoItemComponent],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                TuiInputModule,
                TuiTextfieldControllerModule,
                TuiButtonModule,
                TuiCheckboxLabeledModule,
            ]
        }).compileComponents()

        fixture = TestBed.createComponent(TestingTodoItemComponent)
        component = fixture.componentInstance;
    })

    it('init component with todo in form', () => {

    })

    it('check delete button', () => {

    })
})
