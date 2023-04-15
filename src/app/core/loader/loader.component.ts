import { Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
    selector: 'core-loader',
    template: `
        <tui-loader *tuiLet="loader$ | async as loader"
                    [textContent]="loader?.content || 'Loading...'"
                    [showLoader]="loader?.loading"
                    size="xxl"
                    overlay="true"
        >
            <ng-content></ng-content>
        </tui-loader>
    `,
    styles: [
        `:host {
          display: contents
        }`
    ]
})
export class LoaderComponent {
    public readonly loader$ = this.loader.loader$
    constructor(
        public readonly loader: LoaderService
    ) {}
}
