import { Injectable } from '@angular/core';
import { debounceTime, Observable, of, switchMap, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';

const BLACK_LIST_NAMES = new Set(['maks', 'denis']);

@Injectable()
export class CheckNameService {
    public check$(name: string): Observable<any> {
        return of(null).pipe(
            debounceTime(1000),
            switchMap(() => {
                return !BLACK_LIST_NAMES.has(name)
                    ? this.getSuccess$()
                    : this.getError$(name)
            })
        )
    }

    private getSuccess$(): Observable<null>{
        console.log('name is free')
        return of(null)
    }

    private getError$(name: string): Observable<Error> {
        console.log('name is busy')
        return throwError(() => new Error(`Name ${name} is busy`))
    }
}
