import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appColorizeValue]'
})
export class ColorizeValueDirective {
  @Input()
  appColorizeValue!: unknown;

  constructor() { }

  get isString(): boolean {
    return typeof this.appColorizeValue === 'string'
  }

  get isNumber(): boolean {
    return typeof this.appColorizeValue === 'number'
  }

  get isBoolean(): boolean {
    return typeof this.appColorizeValue === 'boolean'
  }

  get isArray(): boolean {
    return Array.isArray(this.appColorizeValue)
  }
}
