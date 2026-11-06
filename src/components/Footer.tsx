export default function Footer() {
  return (
    <footer id="seguridad" className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                V
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                VITALIA
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Software de gestión clínica Multi-Tenant de alto rendimiento.
              Seguridad, aislamiento y cumplimiento médico garantizado.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Producto
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#caracteristicas" className="hover:text-white transition-colors">
                  Expedientes Digitales
                </a>
              </li>
              <li>
                <a href="#caracteristicas" className="hover:text-white transition-colors">
                  Inventario y Farmacia
                </a>
              </li>
              <li>
                <a href="#caracteristicas" className="hover:text-white transition-colors">
                  Asistente IA Clínico
                </a>
              </li>
              <li>
                <a href="#planes" className="hover:text-white transition-colors">
                  Planes de Suscripción
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Seguridad & Cumplimiento
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="text-slate-400">Aislamiento por Tenant</li>
              <li className="text-slate-400">Cifrado AES-256 en Reposo</li>
              <li className="text-slate-400">Pasarela PayPal Segura</li>
              <li className="text-slate-400">Respaldos Diarios Automáticos</li>
            </ul>
          </div>

          <div id="contacto">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <p className="text-sm text-slate-400 mb-2">
              soporte@vitalia-clinica.com
            </p>
            <p className="text-sm text-slate-400 mb-4">
              Atención médica y técnica para administradores clínicos.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 VITALIA Healthcare SaaS. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Aviso de Privacidad</span>
            <span className="hover:text-slate-400 cursor-pointer">Términos de Servicio</span>
            <span className="hover:text-slate-400 cursor-pointer">Seguridad HIPAA / NOM</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
