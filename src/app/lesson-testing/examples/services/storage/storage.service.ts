import { Inject, Injectable } from '@angular/core';
import { STORAGE_TOKEN } from './storage.token';

@Injectable()
export class StorageService implements Storage {
    constructor(
        @Inject(STORAGE_TOKEN)
        private readonly storage: Storage
    ) {
    }

    public get length(): number{
        return this.storage.length
    }

    public clear(): void {
        this.storage.clear();
    }

    public getItem(key: string): string | null {
        return this.storage.getItem(key);
    }

    public key(index: number): string | null {
        return this.storage.key(index)
    }

    public removeItem(key: string): void {
        this.storage.removeItem(key);
    }

    public setItem(key: string, value: string): void {
        this.storage.setItem(key, value)
    }

}
