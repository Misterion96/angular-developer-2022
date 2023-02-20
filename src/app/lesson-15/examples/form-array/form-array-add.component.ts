import { Component, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs';

@Component({
    selector: 'app-form-array-add',
    template: `
        <form [formGroup]="formGroup" 
              class="tui-form tui-space_bottom-4"
        >
            <div tuiGroup>
                <tui-input-phone
                        formControlName="phone"
                        class="tui-form__row"
                >
                    Type a phone number
                    <input
                            tuiTextfield
                            autocomplete="tel"
                    />
                </tui-input-phone>
                <button type="submit" tuiButton> add </button>
            </div>

        </form>
    `,
})
export class FormArrayAddComponent {
    public readonly formGroup = new FormGroup({
        phone: new FormControl('')
    }, {updateOn: 'submit'})

    @Output()
    public readonly addPhone = this.formGroup.valueChanges.pipe(
        map(({phone}) => phone)
    );
}
