import { StorageService } from './storage.service';
const KEY = 'KEY-1'
const VALUE = 'VALUE-1'

describe('StorageService', () => {
    let service!: StorageService

    beforeEach(() => {
        service = new StorageService(localStorage)
    })

    afterEach(() => {
        // localStorage.clear()
    })

    it('get item', () => {
        expect(service.getItem(KEY)).toBeFalsy()
    });

    it('set item 1', function () {
        const spy = spyOn(localStorage, 'setItem');

        service.setItem(KEY, VALUE)

        expect(spy).toHaveBeenCalled()
        expect(spy).toHaveBeenCalledWith(KEY, VALUE)
    });


})
