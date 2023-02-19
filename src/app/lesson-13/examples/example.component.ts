import { HttpBackend, HttpClient, HttpRequest } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { catchError, concatMap, from, interval, Observable, of, switchMap } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { CodeErrorsService } from '../services/code-errors.service';
import { Lesson13User, UsersUriService } from '../services/users-uri.service';

@Component({
    selector: 'lesson-13-examples',
    template: `
        <p>
            Responses
        </p>
<!--        <app-parsed-obs-json [obs$]="obs$"></app-parsed-obs-json>-->

        <tui-input-number [(ngModel)]="httpCode"
                          [ngModelOptions]="httpCodeInputOptions"
                          (ngModelChange)="onChange()"
        ></tui-input-number>

    `,
    styles: [':host {display: block; margin: 0 auto; width: 600px;}']
})
export class ExampleComponent {
    // obs$ = new Observable()
    // get
    // public obs$ = this.httpClient.get(this.usersUri.USER_URL(6))
    // post
    // put
    // patch
    // delete

    //headers/
    //query
    // response type


    constructor(
        private readonly usersUri: UsersUriService,
        private readonly codeErrors: CodeErrorsService,
        private readonly httpClient: HttpClient,
        private readonly httpBackend: HttpBackend,
    ) {
    }

    public httpCode = 0;
    public readonly httpCodeInputOptions: NgModel['options'] = {
        updateOn: 'blur'
    }

    public onChange(): void {
        // this.obs$ = this.codeErrors.request$(this.httpCode).pipe(
        //     catchError((err) => {
        //         console.log(err)
        //
        //         return of(['asdasdasd']);
        //     })
        // )
    }
}
