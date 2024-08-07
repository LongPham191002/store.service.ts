import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({
    "projectId":"hoang-long-a10b4",
    "appId":"1:178379628591:web:bb21e26266e2d28b6466da",
    "storageBucket":"hoang-long-a10b4.appspot.com",
    "apiKey":"AIzaSyDvjBbxqxubxnDF9yh4bdSZUOoF_ohYXmI",
    "authDomain":"hoang-long-a10b4.firebaseapp.com",
    "messagingSenderId":"178379628591"
  })), provideAuth(() => getAuth())]
};
