import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
    selector: 'app-parse-control-value',
    template: `
        <p>Value in control</p>
        <pre>{{ value$ | async | json}}</pre>
    `,
})
export class ParseControlValueComponent {
    public value$: Observable<unknown> = new Observable<unknown>();

    @Input()
    set control(v: AbstractControl | null | undefined) {
        if (!v) {
            return
        }

        this.value$ = this.getControlValue$(v);
    }

    private getControlValue$(control: AbstractControl): Observable<unknown> {
        return control.valueChanges.pipe(
            startWith(control.value)
        );
    }
}
