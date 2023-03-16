import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { TestingCreateTodoComponent } from './testing-create-todo.component';

describe('TestingCreateTodoComponent', () => {
    let fixture: ComponentFixture<TestingCreateTodoComponent>
    let component: TestingCreateTodoComponent

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                TestingCreateTodoComponent
            ],
            imports: [
                ReactiveFormsModule,
                TuiInputModule,
                TuiTextfieldControllerModule,
                TuiButtonModule,
            ]
        }).compileComponents()

        fixture = TestBed.createComponent(TestingCreateTodoComponent)
        component = fixture.componentInstance
    })

    it('check', () => {
        expect(component).toBeTruthy()
    })

    it('submit new todo',  () => {

    })
})
