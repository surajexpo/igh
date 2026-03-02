import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [CommonModule, HeaderComponent, FooterComponent, RouterOutlet],
    template: `
    <div class="min-h-screen flex flex-col bg-cosmic">
      <app-header />
      <main class="flex-grow pt-20">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
    styles: [`
    :host { display: block; }
  `]
})
export class MainLayoutComponent { }
