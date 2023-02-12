import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

const STORAGE_KEY = 'INPUT-VALUE'

@Component({
    selector: 'app-host-listener',
    templateUrl: './host-listener.component.html',
    styleUrls: ['./host-listener.component.less']
})
export class HostListenerComponent implements OnInit, OnDestroy {
    @HostListener('window:click', ['$event'])
    public onClick($event: MouseEvent): void {
        // ...some logic
    }

    @HostListener(
        'document:keydown.backspace',
        ['$event.target']
    )
    public onKeyDown(target: Document): void {
        // some logic
    }

    public inputValue: any;

    public todos = [
        'buy something',
        'sell something',
        'drink all the water in the world',
        'give everyone a gold'
    ]

    public ngOnInit(): void {
        this.restoreLastValue()
    }

    public ngOnDestroy(): void {
        this.resetTempValue();
    }

    private restoreLastValue(): void {
        this.inputValue = localStorage.getItem(STORAGE_KEY)
    }

    public setTempValue(): void {
        localStorage.setItem(STORAGE_KEY, this.inputValue)
    }

    private resetTempValue(): void {
        localStorage.removeItem(STORAGE_KEY)
    }



}
