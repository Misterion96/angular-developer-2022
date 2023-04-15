import { Injectable, OnDestroy } from '@angular/core';
import {
    ActivationStart,
    NavigationCancel,
    NavigationEnd,
    NavigationError,
    Router
} from '@angular/router';
import { ReplaySubject, takeUntil } from 'rxjs';
import { LoaderService } from '../loader/loader.service';

@Injectable()
export class RouterListenerService implements OnDestroy {
    private destroy$ = new ReplaySubject(1);

    constructor(
        private readonly router: Router,
        private readonly loader: LoaderService
    ) {
    }

    init(): void {
        this.router.events
            .pipe(
                takeUntil(this.destroy$)
            )
            .subscribe(event => {
                if (this.isNavigated(event)) {
                    this.onNavigated()
                    return
                }

                if (this.isActivationStart(event)) {
                    this.onActivationStart(event)
                    return;
                }
            })
    }

    public ngOnDestroy(): void {
        this.destroy$.next(null)
        this.destroy$.complete();
    }

    public isNavigated(event: unknown): event is NavigationEnd | NavigationError | NavigationCancel {
        return [NavigationEnd, NavigationError, NavigationCancel].some(factory => event instanceof factory)
    }

    public isActivationStart(event: unknown): event is ActivationStart {
        return [ActivationStart].some(factory => event instanceof factory)
    }

    public onNavigated(): void {
        this.loader.off()
    }

    public onActivationStart(event: ActivationStart): void {
        const {
            snapshot: {
                component,
                data
            }
        } = event

        if (!component) {
            return;
        }

        const {content} = data
        this.loader.on(content)
    }
}
