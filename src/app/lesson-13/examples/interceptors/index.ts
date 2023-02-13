import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';
import { CacheInterceptor } from './cache.interceptor';
import { ContextInterceptor } from './context.interceptor';
import { ErrorsInterceptor } from './errors.interceptor';
import { HeadersInterceptor } from './headers.interceptor';

export const EXAMPLE_INTERCEPTORS: Provider[] = [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: CacheInterceptor },
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: ContextInterceptor },
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: HeadersInterceptor },
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: ErrorsInterceptor },
]
