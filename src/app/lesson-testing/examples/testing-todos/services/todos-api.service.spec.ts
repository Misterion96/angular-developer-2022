import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { TestingTodoPayload } from '../testing-todos.interface';
import { TodosApiService } from './todos-api.service';
import { TodosUriService } from './todos-uri.service';
import { TODOS_URL_TOKEN } from './todos-url.token';

const MOCK_API_URL = 'my-api-url';

describe('TodosApiService', () => {
    let service!: TodosApiService
    let httpController!: HttpTestingController;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                {
                    provide: TODOS_URL_TOKEN,
                    useValue: MOCK_API_URL,
                },
                TodosApiService,
                TodosUriService,
            ],
            imports: [
                HttpClientTestingModule
            ]
        }).compileComponents()

        service = TestBed.inject(TodosApiService);
        httpController = TestBed.inject(HttpTestingController)
    })

    it('check api url', () => {
        expect(service.apiUrl).toEqual(MOCK_API_URL)
    })


    it('get all - controller', () => {
        const RESULT = [];

        service.getAll$().subscribe(r => {
            console.log(r)
            expect(r).toEqual(RESULT)
        })

        const request = httpController.expectOne({method: 'GET'})
        console.log(request)
        request.flush(RESULT)

        httpController.verify()
    })

    it('create todo - controller', () => {
        const PAYLOAD: TestingTodoPayload = {
            title: 'MY_TITLE',
            completed: false
        };

        service.create$(PAYLOAD).subscribe((r) => {
            // expect(r).toEqual({ id: 1})
        })

        const request = httpController.expectOne({method: 'POST'})

        expect(request.request.body).toEqual(PAYLOAD)
        request.flush({ id: 1})

        httpController.verify()
    })


})
