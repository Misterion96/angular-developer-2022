import {
    HttpClient, HttpContext,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TOKEN_CONTEXT } from '../examples/interceptors/context.interceptor';


@Injectable()
export class CodeErrorsService {
    constructor(
        private readonly httpClient: HttpClient
    ) {
    }

    private readonly host = 'https://httpstat.us';

    request$(code: number): Observable<string> {
        return this.httpClient.get<string>(`${this.host}/${code}`, {
            context: new HttpContext().set(TOKEN_CONTEXT, 's')
        })
    }
}
