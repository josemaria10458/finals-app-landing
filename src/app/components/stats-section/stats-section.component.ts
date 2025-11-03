import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="stats" class="py-24 bg-gradient-to-br from-gray-50 to-primary-50">
      <div class="section-container">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Por Qué Elegir <span class="gradient-text">Finals App</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Miles de usuarios confían en nosotros para gestionar sus torneos
          </p>
        </div>

        <!-- Stats Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Stat 1 -->
          <div class="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="text-5xl font-bold gradient-text mb-3">10K+</div>
            <div class="text-gray-600 font-medium text-lg">Partidas Registradas</div>
            <div class="mt-4 flex justify-center">
              <svg class="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>

          <!-- Stat 2 -->
          <div class="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="text-5xl font-bold gradient-text mb-3">5K+</div>
            <div class="text-gray-600 font-medium text-lg">Usuarios Activos</div>
            <div class="mt-4 flex justify-center">
              <svg class="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>

          <!-- Stat 3 -->
          <div class="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="text-5xl font-bold gradient-text mb-3">4.9★</div>
            <div class="text-gray-600 font-medium text-lg">Valoración Media</div>
            <div class="mt-4 flex justify-center">
              <div class="flex gap-1">
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- Stat 4 -->
          <div class="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="text-5xl font-bold gradient-text mb-3">24/7</div>
            <div class="text-gray-600 font-medium text-lg">Soporte Disponible</div>
            <div class="mt-4 flex justify-center">
              <svg class="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>

        <!-- Testimonials -->
        <div class="mt-20 grid md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-2xl shadow-lg">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center text-white font-bold text-lg">JM</div>
              <div class="ml-4">
                <div class="font-bold text-gray-900">Juan Martínez</div>
                <div class="text-sm text-gray-600">Tirador Profesional</div>
              </div>
            </div>
            <p class="text-gray-700 italic">"La mejor app para gestionar mis torneos. La interfaz es intuitiva y el sistema de máquinas es increíble."</p>
            <div class="mt-4 flex text-yellow-400">
              ★★★★★
            </div>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-lg">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full flex items-center justify-center text-white font-bold text-lg">SC</div>
              <div class="ml-4">
                <div class="font-bold text-gray-900">Sarah Collins</div>
                <div class="text-sm text-gray-600">Entrenadora</div>
              </div>
            </div>
            <p class="text-gray-700 italic">"Perfecta para mis alumnos. Pueden registrar sus puntuaciones fácilmente y competir contra máquinas inteligentes."</p>
            <div class="mt-4 flex text-yellow-400">
              ★★★★★
            </div>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-lg">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg">PL</div>
              <div class="ml-4">
                <div class="font-bold text-gray-900">Pedro López</div>
                <div class="text-sm text-gray-600">Organizador de Torneos</div>
              </div>
            </div>
            <p class="text-gray-700 italic">"Facilita mucho la organización de eventos. Todos los participantes pueden usar la app y ver resultados en tiempo real."</p>
            <div class="mt-4 flex text-yellow-400">
              ★★★★★
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class StatsSectionComponent {}

