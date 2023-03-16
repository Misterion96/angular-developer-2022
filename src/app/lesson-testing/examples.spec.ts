import { CommonModule } from '@angular/common';
import { Component, Inject, Injectable, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { after } from 'lodash';


describe('lesson examples', () => {
    it('check object', () => {
        const someObject = {};
        const anotherObject = someObject;
        expect(someObject).toBe(anotherObject);
        expect(someObject).toEqual(anotherObject);
    })
    it('check array', () => {
        const array = [1, 2, 3, 4];
        expect(array).toContain(1);
    })
    it('check number', () => {
        const number = 42.22222;
        expect(number).toBeLessThan(100);
        expect(number).toBeGreaterThan(0);
        expect(number).toBeCloseTo(42.2, 1);
    })
    it('check string', () => {
        const string = 'my-value-444';
        expect(string).toMatch(/\d/);
        expect(string).toContain('my-value');
        expect(string).toBeTruthy();
        expect(!string).toBeFalsy();
    });
})

describe("My Test Suite", function () {
    beforeEach(function () {
        // выполняется перед каждым тестом внутри этой группы
    });

    afterEach(function () {
        // выполняется после каждого теста внутри этой группы
    });

    beforeAll(function () {
        // выполняется один раз перед всеми тестами внутри этой группы
    });

    afterAll(function () {
        // выполняется один раз после всех тестов внутри этой группы
    });

    it("should do something", function () {
        // тест
    });
});


describe('example', function () {
    const service = {
        someMethod: (...args: unknown[]) => {
        }
    };

    it('spies expects', () => {

        const spy = spyOn(service, 'someMethod');

        service.someMethod('value--1', 'param__4');

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledOnceWith('value--1', 'param__4');
    })
});

function myFunction(obj: {
                        method1: () => string,
                    }
): string {
    return obj.method1()
}

describe('example 2', () => {
    it('test myFunction', () => {
        const mockObj = jasmine.createSpyObj(
            'mockObj',
            ['method1']
        );

        mockObj.method1.and.returnValue('returnValue');

        // Тестируем функцию, которая использует методы объекта
        const result = myFunction(mockObj);

        expect(mockObj.method1).toHaveBeenCalled();
        expect(result).toEqual('returnValue');
    });
});


// @Component({
//     selector: 'dumb-component',
//     template: `HELLO {{service.message}}`
// })
// class AppComponent {
//     constructor(public readonly service: MyService) {}
// }
//
// @Injectable()
// class MyService { message = 'USER_NAME' }
//
// describe('AppComponent', () => {
//     let component: AppComponent;
//     let fixture: ComponentFixture<AppComponent>
//
//     beforeEach(async () => {
//         await TestBed.configureTestingModule({
//             declarations: [ AppComponent ],
//             providers: [ MyService ]
//         }).compileComponents();
//
//         fixture = TestBed.createComponent(AppComponent);
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//     });
// });
