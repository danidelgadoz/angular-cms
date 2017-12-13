import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    private authUrl = 'http://192.168.1.210:8080/api/v1';
    private headers = new Headers({
        'Content-Type': 'application/json'
    });
    
    constructor(private http: Http, private router: Router) { }

    login(username: string, password: string) {
        let data = {
            email: username,
            password: password
        }
        
        return this.http.post(`${this.authUrl}/login`, data, {headers: this.headers})
        .map((response: Response) => {
            let body = response.json();            
            if (body.auth) {
                localStorage.setItem('currentUser', JSON.stringify(body.data));
            }
            return body;
        });
    }

    logout() {      
      localStorage.removeItem('currentUser');
      this.router.navigate(['/login']);
    }

    getApiToken() {
        return 'Bearer ' + JSON.parse(localStorage.currentUser).api_token;
    }

}
