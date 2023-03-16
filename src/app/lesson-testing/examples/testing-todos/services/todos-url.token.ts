import { InjectionToken } from '@angular/core';

export const TODOS_URL_TOKEN = new InjectionToken<string>('TODOS_URL_TOKEN', {
    factory: () => 'https://jsonplaceholder.typicode.com/todos'
})
