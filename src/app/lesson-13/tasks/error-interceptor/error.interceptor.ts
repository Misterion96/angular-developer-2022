import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShowErrorService } from './show-error.service';

@Injectable()
// implement HttpInterceptor
export class Error404Interceptor implements HttpInterceptor {
    constructor(private readonly errorService: ShowErrorService) {
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.errorService.handleError(next.handle(req));
    }
}
