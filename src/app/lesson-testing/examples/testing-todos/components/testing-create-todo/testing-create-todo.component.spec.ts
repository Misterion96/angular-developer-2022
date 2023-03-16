import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { AbstractPageObject } from '../../testing/abstract.page-object';
import { TestingCreateTodoComponent } from './testing-create-todo.component';

class PageObject extends AbstractPageObject<TestingCreateTodoComponent> {
    constructor(fixture: ComponentFixture<TestingCreateTodoComponent>) {
        super(fixture);
    }

    setInput(value: string){
        const inputEl = this.queryElement<HTMLInputElement>('.__input')
        inputEl.value = value
        inputEl.dispatchEvent(new Event('input'))

        this.fixture.detectChanges();
    }
}
describe('TestingCreateTodoComponent', () => {
    let fixture: ComponentFixture<TestingCreateTodoComponent>
    let component: TestingCreateTodoComponent
    let pageObject!: PageObject

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
        pageObject = new PageObject(fixture)
    })

    it('check', () => {
        expect(component).toBeTruthy()
    })

    it('submit new todo',  () => {
        fixture.detectChanges();

        component.createTodo.subscribe(r => {
            console.log(r)
            expect(r).toEqual('__VALUE__')
        })
        const ne = fixture.nativeElement as HTMLElement


        pageObject.setInput('__VALUE__')
        const formEl = ne.querySelector('.create-todo')
        formEl.dispatchEvent(new Event('submit'));

        fixture.detectChanges();
    })
})
