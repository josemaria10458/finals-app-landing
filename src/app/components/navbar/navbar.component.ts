import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav [class]="'fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-6xl rounded-2xl ' + (isScrolled ? 'bg-white/10 backdrop-blur-md shadow-lg border border-white/20' : 'bg-white/95 backdrop-blur-sm shadow-md')">
      <div class="section-container">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <span class="text-2xl font-bold gradient-text">Finals App</span>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a routerLink="/" fragment="features" class="text-gray-700 hover:text-primary-600 transition-colors font-medium">Características</a>
            <a routerLink="/" fragment="stats" class="text-gray-700 hover:text-primary-600 transition-colors font-medium">Estadísticas</a>
            <a routerLink="/" fragment="download" class="btn-primary">Descargar</a>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            (click)="toggleMenu()"
            class="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path *ngIf="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path *ngIf="isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div 
          *ngIf="isMenuOpen"
          class="md:hidden pb-4 space-y-3 animate-fade-in">
          <a routerLink="/" fragment="features" (click)="toggleMenu()" [class]="'block transition-colors font-medium py-2 ' + (isScrolled ? 'text-white hover:text-primary-200' : 'text-gray-700 hover:text-primary-600')">Características</a>
          <a routerLink="/" fragment="stats" (click)="toggleMenu()" [class]="'block transition-colors font-medium py-2 ' + (isScrolled ? 'text-white hover:text-primary-200' : 'text-gray-700 hover:text-primary-600')">Estadísticas</a>
          <a routerLink="/" fragment="download" (click)="toggleMenu()" class="block btn-primary text-center">Descargar</a>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent {
  isMenuOpen = false;
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

