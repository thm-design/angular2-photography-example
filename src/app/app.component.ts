import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="page-container">
    <header>
      <div>
        <a routerLink="/" class="signature">Faksy Foo</a>          
        <br />
        <span class="sub-signature">Photography</span>
      </div>    
      <nav>
        <a routerLink="/work" routerLinkActive="active-link">Work</a>
        <a routerLink="/contact" routerLinkActive="active-link">Contact</a>
        <a routerLink="/about" routerLinkActive="active-link">About</a>        
      </nav>
    </header>
    <main>        
      <router-outlet></router-outlet>
    </main>
    <footer>
      © 2017 Faksy Foo
    </footer>
  </div>`,
})
export class AppComponent  { name = 'Angular'; }