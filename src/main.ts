import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top' }) // 🔹 Esto restablece el scroll al inicio en cada navegación
    )]
}).catch((err) => console.error(err));
