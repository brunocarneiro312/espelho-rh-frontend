import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!localStorage.getItem('token')) {
      return next.handle(req);
    }

    const authRequest = req.clone({
      headers: req.headers.append('Authentication', 'Bearer ' + localStorage.getItem('token'))
    });

    return next.handle(authRequest);
  }

}
