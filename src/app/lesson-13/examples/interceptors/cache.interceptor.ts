import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
    private cache = {}
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.cache[req.url]){
            return of(this.cache[req.url])
        }

        return next.handle(req).pipe(
            tap(value => this.cache[req.url] = value)
        )
    }
}
