import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'acronym'
})
export class AcronymPipe implements PipeTransform {

    transform(value: string): string {
        return value
            .split(/\s+/g)
            .reduce<string>((result, word) => result + word[0], '')
            .toUpperCase();
    }

}
