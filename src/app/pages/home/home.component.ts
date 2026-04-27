import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { FeaturesSectionComponent } from '../../components/features-section/features-section.component';
import { StatsSectionComponent } from '../../components/stats-section/stats-section.component';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroSectionComponent,
    FeaturesSectionComponent,
    StatsSectionComponent,
    CtaSectionComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen bg-white">
      <app-navbar></app-navbar>
      <app-hero-section></app-hero-section>
      <app-features-section></app-features-section>
      <app-stats-section></app-stats-section>
      <app-cta-section></app-cta-section>
      <app-footer></app-footer>
    </div>
  `,
  styles: []
})
export class HomeComponent {}
