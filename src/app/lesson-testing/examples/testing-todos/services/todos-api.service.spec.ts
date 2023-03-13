import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TodosApiService } from './todos-api.service';
import { TodosUriService } from './todos-uri.service';

const MOCK_API_URL = 'my-api-url';

const MOCK_HTTP_CLIENT = {
    get<T>(url: string): Observable<T> {
        return null
    }
} as HttpClient;

describe('TodosApiService', () => {
    let service!: TodosApiService

    beforeEach(() => {
        service = new TodosApiService(
            new TodosUriService(MOCK_API_URL),
            MOCK_HTTP_CLIENT,
        )
    })

    it('check api url', () => {
        expect(service.apiUrl).toEqual(MOCK_API_URL)
    })

    // get all - spy methods
    it('get all - spy methods', async () => {
        spyOn(MOCK_HTTP_CLIENT, 'get').and.returnValue(of([]))

        const result = await service.getAll$().toPromise()
        expect(result).toEqual([])
    });


    // get all - controller
    // update todo
})
