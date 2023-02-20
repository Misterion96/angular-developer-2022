import { Component } from '@angular/core';
import {
    AbstractControl,
    AsyncValidatorFn,
    FormArray,
    FormControl,
    FormGroup,
    ValidationErrors,
    ValidatorFn
} from '@angular/forms';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CheckNameService } from '../../shared/services/check-name.service';

@Component({
    selector: 'app-form-validators',
    templateUrl: './form-validators.component.html',
    styleUrls: ['./form-validators.component.less']
})
export class FormValidatorsComponent {
    constructor(
        private readonly checknameService: CheckNameService
    ) {
    }

    public readonly formGroup = new FormGroup<any>({
        username: new FormControl('', {asyncValidators: [/*usernameIsFree*/]}),
        email: new FormControl(''), //email
        password: new FormControl(''), //minLength
        passwordEqual: new FormControl(''), //minLength,
        workBalance: new FormArray(
            [
                new FormControl(33),
                new FormControl(33),
                new FormControl(34)
            ], {validators: [/* noMoreThatAHundred */]}) // custom FormArrayValidator
    }, {
        validators: [/*passwordsIsEqual*/],
        updateOn: 'submit'
    })

    public readonly workBalancePlaceholders = ['Life', 'Work', 'Sleep']

    public get workBalanceFormArrayControls(): AbstractControl[] {
        return this.workBalanceFormArray.controls
    }

    private get workBalanceFormArray(): FormArray {
        return this.formGroup.get(['workBalance']) as FormArray
    }
}
