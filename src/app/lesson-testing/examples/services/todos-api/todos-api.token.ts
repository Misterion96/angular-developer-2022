import { InjectionToken } from '@angular/core';

export const TODOS_API_TOKEN = new InjectionToken<string>('TODOS_API_TOKEN', {
    factory: () => 'https://jsonplaceholder.typicode.com'
})
