import { inject } from '@angular/core';
import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { finalize } from 'rxjs';
import { LoaderService } from '../../services/loader/loader.service';

export const loaderInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const loader = inject(LoaderService);
  loader.show();
  return next(req).pipe(
    finalize(() => loader.hide())
  );
};
