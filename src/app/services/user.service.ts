import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable()
export class UserService {
  constructor(private http: Http) { }
    private userUrl = 'api/';

    getAll() {
        return this.http.get(this.userUrl, this.jwt())
        .pipe(
            map((response: Response) => response.json())
        );
    }

    getById(id: number) {
        return this.http.get(`${this.userUrl}/${id}`, this.jwt())
        .pipe(
            map((response: Response) => response.json())
        );
    }

    create(user: User) {
        return this.http.post(this.userUrl, user, this.jwt())
        .pipe(
            map((response: Response) => response.json())
        );
    }

    update(user: User) {
        const url = `${this.userUrl}/${user.id}`;
        return this.http.put(url, user, this.jwt())
        .pipe(
            map((response: Response) => response.json())
        );
    }

    delete(id: number) {
        const url = `${this.userUrl}/${id}`;
        return this.http.delete('/api/users/' + id, this.jwt())
        .pipe(
            map((response: Response) => response.json())
        );
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }

}
