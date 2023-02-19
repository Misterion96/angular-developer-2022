import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err: HttpErrorResponse, caught) => {
                switch (err.status) {
                    case 404: {
                        console.log('is 404. Not found')
                        break;
                    }

                    case 401: {
                        console.log('is 401. Unauthorized')
                        break;
                    }

                    default:
                        break;
                }

                return EMPTY
            })
        )
    }
}
