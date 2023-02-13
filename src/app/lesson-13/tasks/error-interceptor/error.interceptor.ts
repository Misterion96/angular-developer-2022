import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShowErrorService } from './show-error.service';

@Injectable()
// implement HttpInterceptor
export class Error404Interceptor {
    constructor(private readonly errorService: ShowErrorService) {
    }

    // intercept method here

    // return this.errorService.handleError(<put handle>)
}
