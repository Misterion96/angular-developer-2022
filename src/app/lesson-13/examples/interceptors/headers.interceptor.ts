import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

enum HeadersInterceptorEnum {
    PARAM_1 = 'PARAM_1',
    MAIN1 = 'HEADER_1',
}
@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const request = req.clone({
            params: new HttpParams().set(HeadersInterceptorEnum.PARAM_1, 'my-value')
        })

        const request1 = request.clone({
            headers: new HttpHeaders().set(HeadersInterceptorEnum.MAIN1, 'my-value')
        })

        return next.handle(request1)

    }
}
