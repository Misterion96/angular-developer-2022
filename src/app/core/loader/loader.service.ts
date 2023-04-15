import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface LoaderStateInterface {
    loading: boolean
    content: string
}

@Injectable()
export class LoaderService {
    private readonly loaderSubject$ = new BehaviorSubject<LoaderStateInterface>({
        content: '',
        loading: false
    })

    public readonly loader$ = this.loaderSubject$.asObservable()

    public on(content: string = ''): void {
        this.loaderSubject$.next({
            loading: true,
            content,
        })
    }

    public off(): void {
        this.loaderSubject$.next({
            loading: false,
            content: ''
        })
    }
}
