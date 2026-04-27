import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, FooterComponent],
  template: `
    <div class="min-h-screen bg-white">
      <app-navbar></app-navbar>

      <main class="section-container pt-32 pb-20 md:pt-40">
        <nav class="text-sm text-gray-500 mb-8">
          <a routerLink="/" class="hover:text-primary-600 transition-colors">Inicio</a>
          <span class="mx-2">/</span>
          <span class="text-gray-800">Política de privacidad</span>
        </nav>

        <header class="mb-12">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Política de privacidad</h1>
          <p class="text-gray-600">Última actualización: 27 de abril de 2026</p>
        </header>

        <div class="prose prose-gray max-w-none space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 class="text-xl font-semibold text-gray-900 mb-3">1. Responsable del tratamiento</h2>
            <p>
              La presente política describe cómo <strong>Finals App</strong> (en adelante, la «App» o el «Servicio»)
              trata los datos personales de las personas que visitan esta página web o utilizan la aplicación móvil
              asociada, en cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la normativa española de protección de datos.
            </p>
            <p class="mt-3">
              <strong>Identidad del responsable:</strong> el titular del proyecto Finals App.<br />
              <strong>Contacto:</strong> puede escribirnos a la dirección de correo que publiquemos como canal oficial de
              contacto en la App o en esta web para ejercer sus derechos o resolver dudas sobre privacidad.
            </p>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-gray-900 mb-3">2. Datos que podemos tratar</h2>
            <p>Según cómo interactúe con el Servicio, podemos tratar categorías como:</p>
            <ul class="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Datos de cuenta o registro:</strong> identificador, nombre o alias, correo electrónico y credenciales de acceso de forma securizada.</li>
              <li><strong>Datos de uso:</strong> información técnica sobre el dispositivo, sistema operativo, versión de la App, registros de errores y estadísticas de uso agregadas.</li>
              <li><strong>Datos relativos a torneos y competiciones:</strong> información que introduzca o gestione en relación con participantes, puntuaciones o eventos, en la medida en que constituya datos personales.</li>
              <li><strong>Comunicaciones:</strong> contenido de los mensajes que nos envíe a través de formularios o correo electrónico.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-gray-900 mb-3">3. Finalidades y base legal</h2>
            <ul class="list-disc pl-6 space-y-2">
              <li><strong>Prestación del Servicio</strong> (gestión de torneos, cuentas de usuario, sincronización): base legal en la ejecución del contrato o medidas precontractuales (art. 6.1.b RGPD).</li>
              <li><strong>Mejora técnica y seguridad</strong> (depuración, prevención de abusos, estadísticas agregadas): interés legítimo (art. 6.1.f RGPD), sin perjuicio de su derecho de oposición cuando proceda.</li>
              <li><strong>Cumplimiento de obligaciones legales</strong> (conservación de registros cuando la ley lo exija): art. 6.1.c RGPD.</li>
              <li><strong>Comunicaciones comerciales</strong> (si las hubiera): solo con su consentimiento previo (art. 6.1.a RGPD), que podrá retirar en cualquier momento.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-gray-900 mb-3">4. Conservación</h2>
            <p>
              Conservamos los datos el tiempo necesario para cumplir las finalidades descritas y las obligaciones legales.
              Los criterios incluyen la duración de su relación con el Servicio, plazos de prescripción legal y necesidades
              de resolución de incidencias.
            </p>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-gray-900 mb-3">5. Destinatarios y transferencias</h2>
            <p>
              No vendemos sus datos personales. Podemos recurrir a proveedores de infraestructura, alojamiento, analítica
              o notificaciones que actúen como encargados del tratamiento bajo contrato y obligaciones de confidencialidad
              y seguridad. Si algún encargado tratara datos fuera del Espacio Económico Europeo, aplicaremos las garantías
              previstas en el RGPD (decisiones de adecuación, cláusulas contractuas tipo u otras).
            </p>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-gray-900 mb-3">6. Sus derechos</h2>
            <p>Puede ejercer los derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición, así como retirar el consentimiento en cualquier momento, cuando la base legal lo permita.</p>
            <p class="mt-3">
              También tiene derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos</strong>
              (<a href="https://www.aepd.es" class="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).
            </p>
            <p class="mt-3">Para ejercer sus derechos, utilice el canal de contacto indicado en la sección 1.</p>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-gray-900 mb-3">7. Seguridad</h2>
            <p>
              Aplicamos medidas técnicas y organizativas apropiadas para proteger los datos frente a accesos no autorizados,
              pérdida o alteración. Ningún sistema es infalible; le rogamos que proteja sus credenciales y utilice contraseñas robustas.
            </p>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-gray-900 mb-3">8. Menores de edad</h2>
            <p>
              El Servicio no está dirigido a menores de 14 años. Si tiene conocimiento de que hemos recopilado datos de un menor
              sin el consentimiento parental exigible, le rogamos que nos contacte para proceder a su eliminación.
            </p>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-gray-900 mb-3">9. Cambios en esta política</h2>
            <p>
              Podemos actualizar esta política para reflejar cambios legales o del Servicio. Publicaremos la versión vigente
              en esta página con la fecha de «Última actualización». Le recomendamos revisarla periódicamente.
            </p>
          </section>
        </div>
      </main>

      <app-footer></app-footer>
    </div>
  `,
  styles: []
})
export class PrivacyPolicyComponent {}
