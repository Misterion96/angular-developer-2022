import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-form-control',
    templateUrl: './form-control.component.html',
    styleUrls: ['./form-control.component.less']
})
export class FormControlComponent implements OnInit {
    public readonly control = new FormControl(false, {updateOn: 'submit'});
    // init
    // get value - ngModelChange, valueChanges, value
    // updateOn - change, blur, submit
    // typed
    constructor() {
    }

    ngOnInit(): void {
        this.control.valueChanges.subscribe(r => console.log(r));
    }

    public onCheck(): any {
        console.log(this.control.value);
        return false
    }
}
