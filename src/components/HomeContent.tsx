import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ImageSlider from './ImageSlider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

/**
 * Componente HomeContent rediseñado estilo gobierno
 * 
 * Incluye todas las secciones con diseño limpio y moderno:
 * - Slider de imágenes heroicas
 * - Información institucional
 * - Auditoría Social
 * - Servicios principales
 * - Unidad de Información Pública
 */

const HomeContent = () => {
  const navigate = useNavigate();
  const auditoriaSocial = useScrollAnimation();
  const servicios = useScrollAnimation();
  const informacionPublica = useScrollAnimation();

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Slider de imágenes heroicas */}
      <section className="py-6">
        <div className="w-full">
          <ImageSlider />
        </div>
      </section>

      {/* Información institucional */}
      <section className="py-8 px-6 bg-white rounded-lg shadow-sm mb-8">
        <div className="text-center">
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
            La Contraloría General de Cuentas es la Institución del Estado encargada de promover y verificar el cumplimiento de la legislación laboral, así como elaborar e implementar políticas y programas con equidad, relativas al trabajo decente y la previsión social, en beneficio de la población trabajadora y grupos en riesgo de vulnerabilidad laboral.
          </p>
        </div>
      </section>

      {/* Secciones de servicios */}
      <div className="space-y-8">
        
        {/* AUDITORÍA SOCIAL */}
        <section ref={auditoriaSocial.elementRef} className={`bg-white p-6 rounded-lg shadow-sm transition-all duration-1000 delay-200 ${auditoriaSocial.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              AUDITORÍA SOCIAL
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              variant="ghost"
              className="h-auto p-4 bg-orange-50 hover:bg-orange-100 transition-all duration-300 
                hover:shadow-md border border-orange-200/50 hover:border-orange-300/50 group text-left"
              onClick={() => handleNavigation('/denuncia-ciudadana')}
            >
              <div className="flex items-center space-x-4 w-full">
                <div className="p-3 rounded bg-white/80 shadow-sm">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/1161/1161388.png" 
                    alt="Denuncia Ciudadana" 
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Denuncia Ciudadana</h3>
                  <p className="text-sm text-gray-600">contraloria.gob.gt</p>
                </div>
              </div>
            </Button>

            <Button
              variant="ghost"
              className="h-auto p-4 bg-blue-50 hover:bg-blue-100 transition-all duration-300 
                hover:shadow-md border border-blue-200/50 hover:border-blue-300/50 group text-left"
              onClick={() => handleNavigation('/auditoria-participativa')}
            >
              <div className="flex items-center space-x-4 w-full">
                <div className="p-3 rounded bg-white/80 shadow-sm">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/1055/1055645.png" 
                    alt="Auditoría Participativa" 
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Auditoría Participativa</h3>
                  <p className="text-sm text-gray-600">Participación ciudadana</p>
                </div>
              </div>
            </Button>
          </div>
        </section>

        {/* SERVICIOS */}
        <section ref={servicios.elementRef} className={`bg-white p-6 rounded-lg shadow-sm transition-all duration-1000 delay-300 ${servicios.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              SERVICIOS
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Haga click sobre el servicio de su interés. El enlace abrirá otra pestaña de su navegador.
            </p>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <Button 
              variant="ghost" 
              className="h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:shadow-md border border-blue-200/30 group" 
              onClick={() => handleNavigation('/servicios-generales')}
            >
              <div className="text-center flex flex-col items-center space-y-1">
                <img src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" alt="Servicios Generales" className="w-8 h-8 transition-all duration-300 group-hover:scale-110" />
                <div className="text-xs font-medium text-gray-900">Servicios</div>
                <div className="text-xs text-gray-600">Generales</div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:shadow-md border border-blue-200/30 group" 
              onClick={() => handleNavigation('/servicios-especializados')}
            >
              <div className="text-center flex flex-col items-center space-y-1">
                <img src="https://cdn-icons-png.flaticon.com/512/1055/1055645.png" alt="Servicios Especializados" className="w-8 h-8 transition-all duration-300 group-hover:scale-110" />
                <div className="text-xs font-medium text-gray-900">Servicios</div>
                <div className="text-xs text-gray-600">Especializados</div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:shadow-md border border-blue-200/30 group" 
              onClick={() => handleNavigation('/salario-minimo')}
            >
              <div className="text-center flex flex-col items-center space-y-1">
                <img src="https://cdn-icons-png.flaticon.com/512/2920/2920349.png" alt="Salario Mínimo" className="w-8 h-8 transition-all duration-300 group-hover:scale-110" />
                <div className="text-xs font-medium text-gray-900">Salario Mínimo</div>
                <div className="text-xs text-gray-600">y Prestaciones</div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:shadow-md border border-blue-200/30 group" 
              onClick={() => handleNavigation('/tutoriales')}
            >
              <div className="text-center flex flex-col items-center space-y-1">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Tutoriales" className="w-8 h-8 transition-all duration-300 group-hover:scale-110" />
                <div className="text-xs font-medium text-gray-900">Tutoriales</div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:shadow-md border border-blue-200/30 group" 
              onClick={() => handleNavigation('/catalogo-tramites')}
            >
              <div className="text-center flex flex-col items-center space-y-1">
                <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" alt="Catálogo Trámites" className="w-8 h-8 transition-all duration-300 group-hover:scale-110" />
                <div className="text-xs font-medium text-gray-900">Catálogo de</div>
                <div className="text-xs text-gray-600">Trámites</div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-20 bg-green-50 hover:bg-green-100 transition-all duration-300 hover:shadow-md border border-green-200/30 group" 
              onClick={() => handleNavigation('/programa-adulto-mayor')}
            >
              <div className="text-center flex flex-col items-center space-y-1">
                <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="Programa Adulto Mayor" className="w-8 h-8 transition-all duration-300 group-hover:scale-110" />
                <div className="text-xs font-medium text-gray-900">Programa</div>
                <div className="text-xs text-gray-600">Adulto Mayor</div>
              </div>
            </Button>
          </div>
        </section>

        {/* UNIDAD DE INFORMACIÓN PÚBLICA */}
        <section ref={informacionPublica.elementRef} className={`bg-white p-6 rounded-lg shadow-sm transition-all duration-1000 delay-400 ${informacionPublica.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              UNIDAD DE INFORMACIÓN PÚBLICA
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Haga click sobre el servicio de su interés. El enlace abrirá otra pestaña de su navegador.
            </p>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              variant="ghost"
              className="h-auto p-4 bg-blue-50 hover:bg-blue-100 transition-all duration-300 
                hover:shadow-md border border-blue-200/50 hover:border-blue-300/50 group text-left"
              onClick={() => handleNavigation('/informacion-publica-oficio')}
            >
              <div className="flex items-center space-x-4 w-full">
                <div className="p-3 rounded bg-white/80 shadow-sm">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/1055/1055645.png" 
                    alt="Información pública de oficio" 
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Información pública</h3>
                  <p className="text-xs text-gray-600">de oficio</p>
                </div>
              </div>
            </Button>

            <Button
              variant="ghost"
              className="h-auto p-4 bg-blue-50 hover:bg-blue-100 transition-all duration-300 
                hover:shadow-md border border-blue-200/50 hover:border-blue-300/50 group text-left"
              onClick={() => handleNavigation('/solicitud-informacion-publica')}
            >
              <div className="flex items-center space-x-4 w-full">
                <div className="p-3 rounded bg-white/80 shadow-sm">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/2920/2920349.png" 
                    alt="Solicitud información pública" 
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Solicitud de</h3>
                  <p className="text-xs text-gray-600">información pública</p>
                </div>
              </div>
            </Button>

            <Button
              variant="ghost"
              className="h-auto p-4 bg-blue-50 hover:bg-blue-100 transition-all duration-300 
                hover:shadow-md border border-blue-200/50 hover:border-blue-300/50 group text-left"
              onClick={() => handleNavigation('/gobierno-abierto')}
            >
              <div className="flex items-center space-x-4 w-full">
                <div className="p-3 rounded bg-white/80 shadow-sm">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" 
                    alt="Gobierno Abierto" 
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Gobierno</h3>
                  <p className="text-xs text-gray-600">Abierto</p>
                </div>
              </div>
            </Button>

            <Button
              variant="ghost"
              className="h-auto p-4 bg-blue-50 hover:bg-blue-100 transition-all duration-300 
                hover:shadow-md border border-blue-200/50 hover:border-blue-300/50 group text-left"
              onClick={() => handleNavigation('/guias-inclusion-laboral')}
            >
              <div className="flex items-center space-x-4 w-full">
                <div className="p-3 rounded bg-white/80 shadow-sm">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                    alt="Guías de Inclusión Laboral" 
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Guías de</h3>
                  <p className="text-xs text-gray-600">Inclusión Laboral</p>
                </div>
              </div>
            </Button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HomeContent;