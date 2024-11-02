import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';


export const appConfig: ApplicationConfig = {
  
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  
 
  
  
};
