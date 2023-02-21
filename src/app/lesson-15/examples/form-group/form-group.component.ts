import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-form-group',
    templateUrl: './form-group.component.html',
    styleUrls: ['./form-group.component.less']
})
export class FormGroupComponent implements OnInit {
    public readonly checkbox = new FormControl(false);
    public readonly checkbox$ = this.checkbox.valueChanges.pipe(
        tap((value) => this.updateForm(value))
    )
    public readonly formGroup = new FormGroup<any>({
        login: new FormControl('',),
        password: new FormControl(''),
        additionalInfoActive: this.checkbox
    },)
    // init
    // get value - valueChanges, submit
    // updateOn - change, blur, submit + control
    // setValue vs patchValue
    // typed
    // addControl, removeControl

    constructor() {
    }

    ngOnInit(): void {
    }

    public onPatch(): void {
        this.formGroup.patchValue({login: 1, t: false})
    }

    public onSet(): void {
        this.formGroup.setValue({login: 1, t: false})
    }

    private updateForm(value: boolean): void {
        console.log(!!this.formGroup.get('info'))
        if (value) {
            this.formGroup.addControl('info', new FormControl(''))
        } else {
            this.formGroup.removeControl('info')
        }
    }
}
