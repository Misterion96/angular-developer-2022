import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule, Provider } from '@angular/core';
import { CodeErrorsService } from '../../services/code-errors.service';
import { Error404Interceptor } from './error.interceptor';
import { ShowErrorService } from './show-error.service';

const APP_INIT: Provider = {
    provide: APP_INITIALIZER,
    multi: true,
    deps: [CodeErrorsService],
    useFactory: (errorsService: CodeErrorsService) => () => errorsService.request$(404),
}

@NgModule({
    providers: [
        ShowErrorService,
        CodeErrorsService,
        APP_INIT,
    ]
})
export class ErrorInterceptorModule {
}
