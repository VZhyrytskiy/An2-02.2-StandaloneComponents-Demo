import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}


bootstrapApplication(AppComponent, {
  // Environment injectors
  providers: [
    importProvidersFrom(RouterModule.forRoot(APP_ROUTES))
    // {provide: BACKEND_URL, useValue: 'https://photoapp.looknongmodules.com/api'},
  ]
});
