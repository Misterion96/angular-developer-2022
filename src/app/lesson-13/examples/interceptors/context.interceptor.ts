import { HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export const TOKEN_CONTEXT = new HttpContextToken(() => 's')
@Injectable()
export class ContextInterceptor implements HttpInterceptor {
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.context.has(TOKEN_CONTEXT)){
            return of([]) as any
        }

        return next.handle(req)
    }
}
