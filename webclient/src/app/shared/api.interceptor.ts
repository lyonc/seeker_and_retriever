import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpEvent,
    HttpInterceptor,
    HttpHandler
} from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://localhost:5001';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            url: `${baseUrl}/${request.url}`
        });

        return next.handle(request);
    }
}
