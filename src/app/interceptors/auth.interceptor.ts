import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('AuthInterceptor:: intercepts each HTTP request', request);
    // request.headers = {'randomKey': 'randomValue'}; Can't assign value as 'request' is a read-only object

    let searchParams = request.params;
    searchParams = request.params.append(
      'randomFirstParamKey',
      'randomFirstParamValue'
    );
    searchParams = request.params.append(
      'randomSecondParamKey',
      'randomSecondParamValue'
    );

    let modifiedRequest = request.clone({
      headers: request.headers.append('randomKey', 'randomValue'),
      params: searchParams,
    });

    return next.handle(modifiedRequest);
  }
}
