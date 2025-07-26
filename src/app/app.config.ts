import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { loaderInterceptor } from '../core/interceptors/loader/loader.interceptor';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environments } from '../environments';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true })
    , provideRouter(routes, withViewTransitions(), withHashLocation()
      , withInMemoryScrolling({ scrollPositionRestoration: "top" }))


    , provideClientHydration(withEventReplay())

    , provideHttpClient(withFetch(), withInterceptors([loaderInterceptor]))

    , provideFirebaseApp(() => initializeApp(environments.firebaseConfig))

    , provideFirestore(() => getFirestore())

    , provideAuth(() => getAuth())
  ]
};
