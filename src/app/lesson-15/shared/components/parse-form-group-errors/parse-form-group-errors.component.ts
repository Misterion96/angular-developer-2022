import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'app-parse-form-group-errors',
    templateUrl: './parse-form-group-errors.component.html',
    styleUrls: ['./parse-form-group-errors.component.less']
})
export class ParseFormGroupErrorsComponent {
    @Input()
    public fGroup: FormGroup<any> = new FormGroup<any>({});

    public errors$: Observable<Record<string | number, unknown>> = new Observable<Record<string | number, unknown>>()

    ngOnInit(): void {
        this.errors$ = this.fGroup.valueChanges.pipe(
            startWith({}),
            map(() => {
                return Object
                    .entries(this.fGroup.controls)
                    .reduce((acc, [controlName, control]) => {
                        acc[controlName] = control.errors;

                        return acc
                    }, {})
            }),
            map(controls => {
                return {
                    controls,
                    group: this.fGroup.errors
                }
            })
        )
    }
}
