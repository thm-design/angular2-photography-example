import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomePageComponent } from './home-page.component';
import { AboutPageComponent } from './about-page.component';
import { ContactPageComponent } from './contact-page.component';
import { WorkPageComponent } from './work-page.component';
import { GalleryComponent } from './gallery.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'about',
        component: AboutPageComponent
      },
      {
        path: 'contact',
        component: ContactPageComponent
      },
      {
        path: 'work',
        component: WorkPageComponent,
        children: [
          {
            path: '',
            redirectTo: 'in-color',
            pathMatch: 'full'
          },
          {
            path: 'in-color',
            component: GalleryComponent,
            data: { collection: 'color' }
          },
          {
            path: 'in-black-and-white',
            component: GalleryComponent,
            data: { collection:  'bw' }
          },
          {
            path: 'cats',
            component: GalleryComponent,
            data: { collection:  'cats' }
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
  
}