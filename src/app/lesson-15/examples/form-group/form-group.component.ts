import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.less']
})
export class FormGroupComponent implements OnInit {
  // init
  // get value - valueChanges, submit
  // updateOn - change, blur, submit + control
  // setValue vs patchValue
  // typed
  // addControl, removeControl

  public readonly formGroup: FormGroup | null = null
  constructor() { }

  ngOnInit(): void {

  }
}
