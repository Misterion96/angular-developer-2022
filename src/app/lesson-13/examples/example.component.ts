import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CodeErrorsService } from '../services/code-errors.service';
import { Lesson13User, UsersUriService } from '../services/users-uri.service';

@Component({
    selector: 'lesson-13-examples',
    template: `
        <p>
            Responses
        </p>
        <app-parsed-obs-json></app-parsed-obs-json>
        
        
<!--        <tui-input-number [(ngModel)]="httpCode"-->
<!--                          [ngModelOptions]="httpCodeInputOptions"-->
<!--        ></tui-input-number>-->
    `,
    styles: [':host {display: block; margin: 0 auto; width: 600px;}']
})
export class ExampleComponent {
    // get
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
    ) {
    }
    //
    // public httpCode = 0;
    // public readonly httpCodeInputOptions: NgModel['options'] = {
    //     updateOn: 'blur'
    // }
}
