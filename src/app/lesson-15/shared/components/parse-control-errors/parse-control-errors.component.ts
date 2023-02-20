import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-parse-control-errors',
  template: `
    <pre *ngIf="control; else noControlRef">
      {{control.errors | json}}
    </pre>
    
    <ng-template #noControlRef>
      no control
    </ng-template>
  `,
  styles: [
  ]
})
export class ParseControlErrorsComponent {
  @Input()
  public control: AbstractControl | null | undefined = null;
}
