import { AcronymPipe } from './acronym.pipe';

describe('AcronymPipe', () => {
    let pipe!: AcronymPipe
    beforeEach(() => {
        pipe = new AcronymPipe()
    })

    it('name and surname conversion', () => {
        const NAME = 'Maks Dolgikh'
        const result = pipe.transform(NAME)
        expect(result).toEqual('MD')
    });

    it('name and surname conversion with spaces', () => {
        const NAME = 'Maks     Dolgikh    '
        const result = pipe.transform(NAME)
        expect(result).toEqual('MD')
    });

    it('input is null', () => {
        const result = pipe.transform(null)
        expect(result).toEqual('')
    });

    it('input is undefined', () => {
        const result = pipe.transform(undefined)
        expect(result).toEqual('')
    });
})
