import { CommonModule } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiButtonModule, TuiLoaderModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiCheckboxLabeledModule, TuiInputModule } from '@taiga-ui/kit';
import { TestingTodoPayload } from '../../testing-todos.interface';
import { TestingTodoItemComponent } from './testing-todo-item.component';

const TODO: TestingTodoPayload = {title: 'TODO_TITLE', completed: false}

describe('TestingTodoItemComponent', () => {
    let fixture: ComponentFixture<TestingTodoItemComponent>
    let component: TestingTodoItemComponent

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
        component.todo = TODO;

        fixture.detectChanges();

        const formGroupValue = component.formGroupTodo.value;
        expect(formGroupValue).toEqual(TODO);

        const ne = fixture.nativeElement as HTMLElement;
        const tuiInputElement = ne.querySelector('.todo-item__title');

        expect(tuiInputElement.textContent).toContain(TODO.title)

    })

    it('check delete button', () => {
        component.todo = TODO;

        fixture.detectChanges();

        const spy = spyOn(component, 'onClickDelete')
        const ne = fixture.nativeElement as HTMLElement;
        const buttonEl = ne.querySelector('button') as HTMLElement
        buttonEl.click()

        fixture.detectChanges();

        expect(spy).toHaveBeenCalled()
    })
})
