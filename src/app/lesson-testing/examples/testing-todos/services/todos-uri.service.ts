import { Inject, Injectable } from '@angular/core';
import { TODOS_URL_TOKEN } from './todos-url.token';

@Injectable()
export class TodosUriService {
    constructor(
        @Inject(TODOS_URL_TOKEN)
        private readonly url: string
    ) {
    }

    get TODOS_URL(){
        return `${this.url}`
    }

    public TODO_URL (id): string {
        return `${this.TODOS_URL}/${id}`
    }
}
