import { Component, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormGroup, FormControl } from '@angular/forms';
import { map } from 'rxjs';

@Component({
    selector: 'app-form-array',
    templateUrl: './form-array.component.html',
    styleUrls: ['./form-array.component.less']
})
export class FormArrayComponent implements OnInit {
    public readonly formArray = new FormArray([
        new FormControl('79122223344'),
        new FormControl('79122223366'),
        new FormControl('79122223377'),
        new FormControl('79122223323'),
    ])
    // init
    // getValue
    // updateOn
    // typed
    // push, removeAt

    public readonly formGroup = new FormGroup({
        phones: this.formArray
    })

    // public get phonesFormArray(): FormArray {}

    // public get phonesControls(): FormControl[] {
    //     return this.formArray.controls
    // }


    constructor() {
    }

    ngOnInit(): void {
        console.log(this.formArray.controls.values())
    }

    public onAdd(phone: string): void {
        this.formArray.push(new FormControl(phone))
    }

    public onRemove(i: number): void {
        this.formArray.removeAt(i, {emitEvent: true});
    }
}


