import { HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { TuiAlertService, TuiNotification } from '@taiga-ui/core';
import { catchError, EMPTY, Observable } from 'rxjs';

@Injectable()
export class ShowErrorService {
    constructor(
        @Inject(TuiAlertService)
        private readonly alertService: TuiAlertService,
    ) {
    }

    handleError(obs$: Observable<HttpEvent<any>>): Observable<any> {
        return obs$.pipe(
            catchError((err: HttpErrorResponse, caught) => {
                this.alertService.open(err.message, {
                    status: TuiNotification.Error,
                    autoClose: true
                }).subscribe();

                return EMPTY
            })
        )
    }
}
