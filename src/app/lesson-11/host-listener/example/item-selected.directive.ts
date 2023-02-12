import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appItemSelected]',
    host: {
        tabindex: '-1'
    }
})
export class ItemSelectedDirective {

    constructor(
    ) {
    }
}
