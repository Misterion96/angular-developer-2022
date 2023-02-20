import { Component, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormGroup, FormControl } from '@angular/forms';
import { map } from 'rxjs';

@Component({
    selector: 'app-form-array',
    templateUrl: './form-array.component.html',
    styleUrls: ['./form-array.component.less']
})
export class FormArrayComponent implements OnInit {
    // init
    // getValue
    // updateOn
    // typed
    // push, removeAt

    public readonly formGroup = new FormGroup({
        phones: new FormArray([])
    })

    // public get phonesFormArray(): FormArray {}

    // public get phonesControls(): FormControl[] {}


    constructor() {
    }

    ngOnInit(): void {
    }

    // public onAdd($event: string): void {
    // }

    // public onDelete(i: number): void {
    // }
}


