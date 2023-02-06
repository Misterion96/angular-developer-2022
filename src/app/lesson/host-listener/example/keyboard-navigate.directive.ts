import {
  AfterViewInit,
  ContentChildren,
  Directive,
  ElementRef,
  HostListener,
  QueryList,
} from '@angular/core';
import { ItemSelectedDirective } from './item-selected.directive';

@Directive({
  selector: '[appKeyboardNavigate]',
})
export class KeyboardNavigateDirective implements AfterViewInit{
  public focusItem: HTMLElement | null = null;

  @ContentChildren(ItemSelectedDirective, {read: ElementRef})
  public elements: QueryList<ElementRef<HTMLElement>> = new QueryList<ElementRef<HTMLElement>>()

  constructor() { }

  public ngAfterViewInit(): void {
    console.log(this.elements)
  }

}
