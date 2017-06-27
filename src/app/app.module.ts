import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomePageComponent } from './home-page.component';
import { AboutPageComponent } from './about-page.component';
import { ContactPageComponent } from './contact-page.component';
import { WorkPageComponent } from './work-page.component';
import { GalleryComponent } from './gallery.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    WorkPageComponent,
    GalleryComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }