import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading, } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app-routes';
import { HttpClientModule } from '@angular/common/http';

const moduleoid = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(
      APP_ROUTES,
      withPreloading(PreloadAllModules),
      withDebugTracing()
    ),
    provideAnimations()
  ],
};

const environment = { production: false };
if (environment.production) enableProdMode();

bootstrapApplication(AppComponent, moduleoid).catch(console.error);
