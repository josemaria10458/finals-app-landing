import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="features" class="py-24 bg-white">
      <div class="section-container">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Características <span class="gradient-text">Potentes</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas para gestionar tus torneos de tiro de manera profesional
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="group p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Gestión de Puntuaciones</h3>
            <p class="text-gray-600 leading-relaxed">
              Registra y gestiona todas tus puntuaciones de manera precisa. Sistema de múltiples rondas con cálculos automáticos.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="group p-8 rounded-2xl bg-gradient-to-br from-accent-50 to-white border border-accent-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-14 h-14 bg-gradient-to-br from-accent-600 to-accent-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Máquinas Inteligentes</h3>
            <p class="text-gray-600 leading-relaxed">
              Compite contra máquinas con diferentes niveles de dificultad. Sistema de IA que ajusta automáticamente las puntuaciones.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="group p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Partidas Favoritas</h3>
            <p class="text-gray-600 leading-relaxed">
              Guarda tus mejores partidas como favoritas y accede a ellas rápidamente. Historial completo de todas tus sesiones.
            </p>
          </div>

          <!-- Feature 4 -->
          <div class="group p-8 rounded-2xl bg-gradient-to-br from-accent-50 to-white border border-accent-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-14 h-14 bg-gradient-to-br from-accent-600 to-accent-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Múltiples Idiomas</h3>
            <p class="text-gray-600 leading-relaxed">
              Soporte completo para español, inglés y portugués. Interfaz completamente localizada para una mejor experiencia.
            </p>
          </div>

          <!-- Feature 5 -->
          <div class="group p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Seguridad y Privacidad</h3>
            <p class="text-gray-600 leading-relaxed">
              Tus datos están seguros. Almacenamiento local con sincronización opcional. Sin conexión a internet necesaria.
            </p>
          </div>

          <!-- Feature 6 -->
          <div class="group p-8 rounded-2xl bg-gradient-to-br from-accent-50 to-white border border-accent-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-14 h-14 bg-gradient-to-br from-accent-600 to-accent-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Multiplataforma</h3>
            <p class="text-gray-600 leading-relaxed">
              Disponible para iOS, Android y Web. Sincroniza tus partidas entre todos tus dispositivos.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class FeaturesSectionComponent {}

