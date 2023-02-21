import { Component } from '@angular/core';
import {
    AbstractControl,
    AsyncValidatorFn,
    FormArray,
    FormControl,
    FormGroup,
    ValidationErrors,
    ValidatorFn, Validators
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
        username: new FormControl('', {asyncValidators: [usernameIsFree(this.checknameService)]}),
        email: new FormControl(''), //email
        password: new FormControl(''), //minLength
        passwordEqual: new FormControl(''), //minLength,
        workBalance: new FormArray(
            [
                new FormControl(33),
                new FormControl(33),
                new FormControl(34)
            ], {validators: [noMoreThatAHundred]}) // custom FormArrayValidator
    }, {
        updateOn: 'submit',
        validators: [passwordsIsEqual(['password', 'passwordEqual'])],
    })

    public get passwordControl(): AbstractControl {
        return this.formGroup.get('password')
    }

    public readonly workBalancePlaceholders = ['Life', 'Work', 'Sleep']

    public get workBalanceFormArrayControls(): AbstractControl[] {
        return this.workBalanceFormArray.controls
    }

    private get workBalanceFormArray(): FormArray {
        return this.formGroup.get(['workBalance']) as FormArray
    }
}

function usernameIsFree(checkUserNameService: CheckNameService): AsyncValidatorFn {
    return (control: AbstractControl) => {
        return checkUserNameService.check$(control.value).pipe(
            map(() => null),
            catchError(() => of({usernameIsBusy: true}))
        );
    }
}

function passwordsIsEqual(names: [string, string]): ValidatorFn {
    return (control: AbstractControl) => {
        const formGroup = control as FormGroup;
        const [passwordControl1, passwordControl2] = names;
        const [c1, c2] = [formGroup.get(passwordControl1), formGroup.get(passwordControl2)]

        if(!c1 || !c2){
            return null
        }

        const [c1Value, c2Value] = [c1.value, c2.value];

        const isEqual = c1Value ===  c2Value;

        if(!isEqual){
            c1.setErrors({notEqual: true})
            c2.setErrors({notEqual: true})
        }else{
            c1.setErrors(null);
            c2.setErrors(null);
        }

        return isEqual ? null : {notEqual: true}
    }
}


function noMoreThatAHundred(control: AbstractControl): ValidationErrors | null {
    const formArray = control as FormArray;
    const sum = formArray.controls.reduce((acc, control) => {
        const {value} = control
        return acc + value;
    }, 0)

    return sum <= 100 ? null : {overHundred: true}
}
