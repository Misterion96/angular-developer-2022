import {
    HttpClient,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class CodeErrorsService {
    constructor(
        private readonly httpClient: HttpClient
    ) {
    }

    private readonly host = 'https://httpstat.us';

    request$(code: number): Observable<string> {
        return this.httpClient.get<string>(`${this.host}/${code}`)
    }
}
