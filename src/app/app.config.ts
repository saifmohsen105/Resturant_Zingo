import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { loaderInterceptor } from '../core/interceptors/loader/loader.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true })
    , provideRouter(routes, withViewTransitions(), withInMemoryScrolling({ scrollPositionRestoration: "top" }))
    , provideClientHydration(withEventReplay())
    , provideHttpClient(withFetch(), withInterceptors([loaderInterceptor]))]
};
