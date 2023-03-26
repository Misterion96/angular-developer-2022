import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

interface Response {
    message: string,
    status: string
}

@Injectable()
export class ImagesService {

    private cache: Map<string, Response['message']> = new Map<string, Response["message"]>()

    constructor(
        private readonly http: HttpClient
    ) {
    }

    getImage(param: string): Observable<string> {
        if(this.cache.has(param)){
            return of(this.cache.get(param))
        }

        return this.http.get<Response>('https://dog.ceo/api/breeds/image/random').pipe(
            map(({message}) => message),
            tap(message => this.cache.set(param, message))
        )
    }
}
