import { Injectable } from '@angular/core';

export interface Lesson13UserInterface {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    } | {},
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    } | {}
}

export class Lesson13User implements Omit<Lesson13UserInterface, 'id'> {
    constructor(
        public readonly name = '',
        public readonly username = '',
        public readonly email = '',
        public readonly phone = '',
        public readonly website = '',
        public readonly address = {},
        public readonly company = {}
    ) {
    }
}
@Injectable()
export class UsersUriService {

    private readonly host = 'https://jsonplaceholder.typicode.com/users';

    get USERS_URL(): string {
        return this.host
    }

    public USER_URL(userId: Lesson13UserInterface['id']): string {
        return `${this.host}/${userId}`
    }
}
