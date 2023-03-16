import { ComponentFixture } from '@angular/core/testing';

export abstract class AbstractPageObject<T> {
    constructor(public fixture: ComponentFixture<T>) {
    }

    public queryElement<T = HTMLElement>(selector: string): T {
        return (this.fixture.nativeElement as HTMLElement)
            .querySelector(selector) as unknown as T
    }
}
