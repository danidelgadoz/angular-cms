import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

import { AuthenticationService } from '../services/index';

@Injectable()
export class responseInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const started = Date.now();
        return next
        .handle(req)
        .do(event => {
            if (event instanceof HttpResponse) {
                if(event.body.auth===false)
                    this.authenticationService.logout();

                console.log(`Request for ${req.urlWithParams} took ${Date.now() - started} ms.`);
            }
        }).catch((error:any) =>  {
            console.log('interceptor: Server error', error)
            return Observable.throw(error || 'interceptor Server error') ;
        });
    }
}
