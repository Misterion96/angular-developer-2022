import { Pipe, PipeTransform } from '@angular/core';


// Acronym Pipe -> AP

@Pipe({
    name: 'acronym'
})
export class AcronymPipe implements PipeTransform {

    transform(value: string): string {
        if(typeof value !== 'string'){
            return ''
        }

        return value
            .split(/\s+/g)
            .filter(Boolean)
            .reduce<string>((result, word) => result + word[0], '')
            .toUpperCase();
    }
}
