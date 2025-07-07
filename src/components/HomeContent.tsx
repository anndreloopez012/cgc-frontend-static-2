
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ImageSlider from './ImageSlider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

/**
 * Componente HomeContent completo con animaciones de scroll
 * 
 * Incluye todas las secciones con iconos PNG y animaciones:
 * - Slider de imágenes moderno con auto-play
 * - Auditoría Social
 * - Servicios Interinstitucionales  
 * - Programas de Participación Ciudadana
 * - Información Pública
 */

const HomeContent = () => {
  const navigate = useNavigate();
  const auditoriaSocial = useScrollAnimation();
  const serviciosInter = useScrollAnimation();
  const programasParticipacion = useScrollAnimation();
  const informacionPublica = useScrollAnimation();

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <div className="bg-gray-50">
      {/* Slider de imágenes - solo transición básica, sin loading circular */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ImageSlider />
        </div>
      </section>

      {/* Contenido principal */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* AUDITORÍA SOCIAL */}
          <section ref={auditoriaSocial.elementRef} className={`transition-all duration-1000 delay-200 ${auditoriaSocial.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                AUDITORÍA SOCIAL
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Button
                variant="ghost"
                className="h-auto p-6 bg-orange-50 hover:bg-orange-100 hover:scale-105 transition-all duration-300 
                  hover:shadow-lg rounded-xl border border-orange-200/50 hover:border-orange-300/50 group"
                onClick={() => handleNavigation('/denuncia-ciudadana')}
              >
                <div className="flex flex-col items-center text-center space-y-4 w-full">
                  <div className="p-4 rounded-lg bg-white/80 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/1161/1161388.png" 
                      alt="Denuncia Ciudadana" 
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 text-lg">Denuncia Ciudadana</h3>
                    <p className="text-sm text-gray-600">contraloria.gob.gt</p>
                  </div>
                </div>
              </Button>

              <Button
                variant="ghost"
                className="h-auto p-6 bg-blue-50 hover:bg-blue-100 hover:scale-105 transition-all duration-300 
                  hover:shadow-lg rounded-xl border border-blue-200/50 hover:border-blue-300/50 group"
                onClick={() => handleNavigation('/auditoria-participativa')}
              >
                <div className="flex flex-col items-center text-center space-y-4 w-full">
                  <div className="p-4 rounded-lg bg-white/80 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/1055/1055645.png" 
                      alt="Auditoría Participativa" 
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 text-lg">Auditoría Participativa</h3>
                    <p className="text-sm text-gray-600">Participación ciudadana</p>
                  </div>
                </div>
              </Button>
            </div>
          </section>

          {/* SERVICIOS INTERINSTITUCIONALES */}
          <section ref={serviciosInter.elementRef} className={`transition-all duration-1000 delay-300 ${serviciosInter.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                SERVICIOS INTERINSTITUCIONALES
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* Primera fila */}
              <Button variant="ghost" className="h-20 bg-blue-50 hover:bg-blue-100 hover:scale-105 transition-all duration-300 hover:shadow-md rounded-xl group" onClick={() => handleNavigation('/transicion-caja-fiscal')}>
                <div className="text-center flex flex-col items-center space-y-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" alt="Caja Fiscal" className="w-6 h-6 transition-all duration-300 group-hover:scale-110" />
                  <div>
                    <div className="text-xs font-medium text-gray-900">Módulo de Transición</div>
                    <div className="text-xs text-gray-600">Caja Fiscal</div>
                  </div>
                </div>
              </Button>

              <Button variant="ghost" className="h-20 bg-blue-50 hover:bg-blue-100 hover:scale-105 transition-all duration-300 hover:shadow-md rounded-xl group" onClick={() => handleNavigation('/rendicion-cuentas')}>
                <div className="text-center flex flex-col items-center space-y-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/1055/1055645.png" alt="Rendición" className="w-6 h-6 transition-all duration-300 group-hover:scale-110" />
                  <div>
                    <div className="text-xs font-medium text-gray-900">RENDICIÓN</div>
                    <div className="text-xs text-gray-600">DE CUENTAS</div>
                  </div>
                </div>
              </Button>

              <Button variant="ghost" className="h-20 bg-blue-50 hover:bg-blue-100 hover:scale-105 transition-all duration-300 hover:shadow-md rounded-xl group" onClick={() => handleNavigation('/titulos')}>
                <div className="text-center flex flex-col items-center space-y-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Títulos" className="w-6 h-6 transition-all duration-300 group-hover:scale-110" />
                  <div>
                    <div className="text-xs font-medium text-gray-900">Títulos</div>
                  </div>
                </div>
              </Button>

              <Button variant="ghost" className="h-20 bg-blue-50 hover:bg-blue-100 hover:scale-105 transition-all duration-300 hover:shadow-md rounded-xl group" onClick={() => handleNavigation('/bitacora-electronica')}>
                <div className="text-center flex flex-col items-center space-y-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/2920/2920349.png" alt="Bitácora" className="w-6 h-6 transition-all duration-300 group-hover:scale-110" />
                  <div>
                    <div className="text-xs font-medium text-gray-900">Bitácora</div>
                    <div className="text-xs text-gray-600">Electrónica</div>
                  </div>
                </div>
              </Button>

              <Button variant="ghost" className="h-20 bg-green-50 hover:bg-green-100 hover:scale-105 transition-all duration-300 hover:shadow-md rounded-xl group" onClick={() => handleNavigation('/modulo-cuentadancias')}>
                <div className="text-center flex flex-col items-center space-y-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" alt="Cuentadancias" className="w-6 h-6 transition-all duration-300 group-hover:scale-110" />
                  <div>
                    <div className="text-xs font-medium text-gray-900">MÓDULO DE</div>
                    <div className="text-xs text-gray-600">CUENTADANCIAS</div>
                  </div>
                </div>
              </Button>

              {/* Segunda fila */}
              <Button variant="ghost" className="h-20 bg-gray-50 hover:bg-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-md rounded-xl group" onClick={() => handleNavigation('/nacimientos')}>
                <div className="text-center flex flex-col items-center space-y-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="Nacimientos" className="w-6 h-6 transition-all duration-300 group-hover:scale-110" />
                  <div>
                    <div className="text-xs font-medium text-gray-900">NACIMIENTOS</div>
                  </div>
                </div>
              </Button>

              <Button variant="ghost" className="h-20 bg-teal-50 hover:bg-teal-100 hover:scale-105 transition-all duration-300 hover:shadow-md rounded-xl group" onClick={() => handleNavigation('/codigo-etica')}>
                <div className="text-center flex flex-col items-center space-y-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" alt="Código Ética" className="w-6 h-6 transition-all duration-300 group-hover:scale-110" />
                  <div>
                    <div className="text-xs font-medium text-gray-900">CÓDIGO DE</div>
                    <div className="text-xs text-gray-600">ÉTICA</div>
                  </div>
                </div>
              </Button>

              <Button variant="ghost" className="h-20 bg-blue-50 hover:bg-blue-100 hover:scale-105 transition-all duration-300 hover:shadow-md rounded-xl group" onClick={() => handleNavigation('/publicacion-resoluciones')}>
                <div className="text-center flex flex-col items-center space-y-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/1055/1055645.png" alt="Resoluciones" className="w-6 h-6 transition-all duration-300 group-hover:scale-110" />
                  <div>
                    <div className="text-xs font-medium text-gray-900">PUBLICACIÓN DE</div>
                    <div className="text-xs text-gray-600">RESOLUCIONES</div>
                  </div>
                </div>
              </Button>

              <Button variant="ghost" className="h-20 bg-blue-50 hover:bg-blue-100 hover:scale-105 transition-all duration-300 hover:shadow-md rounded-xl group" onClick={() => handleNavigation('/archivo-sistema')}>
                <div className="text-center flex flex-col items-center space-y-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/2920/2920349.png" alt="Archivo" className="w-6 h-6 transition-all duration-300 group-hover:scale-110" />
                  <div>
                    <div className="text-xs font-medium text-gray-900">ARCHIVO</div>
                    <div className="text-xs text-gray-600">SISTEMA DE</div>
                  </div>
                </div>
              </Button>

              <Button variant="ghost" className="h-20 bg-blue-50 hover:bg-blue-100 hover:scale-105 transition-all duration-300 hover:shadow-md rounded-xl group" onClick={() => handleNavigation('/registro-altas-ascensos')}>
                <div className="text-center flex flex-col items-center space-y-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" alt="Registro" className="w-6 h-6 transition-all duration-300 group-hover:scale-110" />
                  <div>
                    <div className="text-xs font-medium text-gray-900">REGISTRO DE ALTAS</div>
                    <div className="text-xs text-gray-600">ASCENSOS Y BAJAS</div>
                  </div>
                </div>
              </Button>

              {/* Tercera fila */}
              <Button variant="ghost" className="h-20 bg-blue-50 hover:bg-blue-100 hover:scale-105 transition-all duration-300 hover:shadow-md rounded-xl group" onClick={() => handleNavigation('/rendicion-cuentas-2')}>
                <div className="text-center flex flex-col items-center space-y-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/1055/1055645.png" alt="Rendición 2" className="w-6 h-6 transition-all duration-300 group-hover:scale-110" />
                  <div>
                    <div className="text-xs font-medium text-gray-900">RENDICIÓN</div>
                    <div className="text-xs text-gray-600">DE CUENTAS</div>
                  </div>
                </div>
              </Button>

              <Button variant="ghost" className="h-20 bg-teal-50 hover:bg-teal-100 hover:scale-105 transition-all duration-300 hover:shadow-md rounded-xl group" onClick={() => handleNavigation('/formacion-capacitacion')}>
                <div className="text-center flex flex-col items-center space-y-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Formación" className="w-6 h-6 transition-all duration-300 group-hover:scale-110" />
                  <div>
                    <div className="text-xs font-medium text-gray-900">FORMACIÓN Y</div>
                    <div className="text-xs text-gray-600">CAPACITACIÓN</div>
                  </div>
                </div>
              </Button>

              <Button variant="ghost" className="h-20 bg-gray-50 hover:bg-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-md rounded-xl group" onClick={() => handleNavigation('/declaratoria-bienes')}>
                <div className="text-center flex flex-col items-center space-y-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" alt="Bienes" className="w-6 h-6 transition-all duration-300 group-hover:scale-110" />
                  <div>
                    <div className="text-xs font-medium text-gray-900">DECLARATORIA DE</div>
                    <div className="text-xs text-gray-600">BIENES MUEBLES</div>
                  </div>
                </div>
              </Button>
            </div>
          </section>

          {/* PROGRAMAS DE PARTICIPACIÓN CIUDADANA */}
          <section ref={programasParticipacion.elementRef} className={`transition-all duration-1000 delay-400 ${programasParticipacion.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                PROGRAMAS DE PARTICIPACIÓN CIUDADANA
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Button
                variant="ghost"
                className="h-24 bg-green-50 hover:bg-green-100 hover:scale-105 transition-all duration-300 hover:shadow-md rounded-xl border border-green-200/50 group"
                onClick={() => handleNavigation('/sembrando-semillas')}
              >
                <div className="text-center flex flex-col items-center space-y-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/1374/1374277.png" alt="Semillas" className="w-8 h-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Sembrando Semillas</h3>
                    <p className="text-xs text-gray-600">de Transparencia</p>
                  </div>
                </div>
              </Button>

              <Button
                variant="ghost"
                className="h-24 bg-blue-50 hover:bg-blue-100 hover:scale-105 transition-all duration-300 hover:shadow-md rounded-xl border border-blue-200/50 group"
                onClick={() => handleNavigation('/organizaciones-familia')}
              >
                <div className="text-center flex flex-col items-center space-y-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="Familia" className="w-8 h-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Organizaciones de</h3>
                    <p className="text-xs text-gray-600">Padres de Familia</p>
                  </div>
                </div>
              </Button>

              <Button
                variant="ghost"
                className="h-24 bg-purple-50 hover:bg-purple-100 hover:scale-105 transition-all duration-300 hover:shadow-md rounded-xl border border-purple-200/50 group"
                onClick={() => handleNavigation('/plan-capacitacion')}
              >
                <div className="text-center flex flex-col items-center space-y-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Capacitación" className="w-8 h-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Plan de Capacitación</h3>
                    <p className="text-xs text-gray-600">del Año de la Ética</p>
                  </div>
                </div>
              </Button>
            </div>
          </section>

          {/* INFORMACIÓN PÚBLICA */}
          <section ref={informacionPublica.elementRef} className={`transition-all duration-1000 delay-500 ${informacionPublica.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                INFORMACIÓN PÚBLICA
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Button
                variant="ghost"
                className="h-24 bg-blue-50 hover:bg-blue-100 hover:scale-105 transition-all duration-300 hover:shadow-md rounded-xl border border-blue-200/50 group"
                onClick={() => handleNavigation('/informacion-publica')}
              >
                <div className="text-center flex flex-col items-center space-y-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/1055/1055645.png" alt="Información" className="w-8 h-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">INFORMACIÓN</h3>
                    <p className="text-xs text-gray-600">PÚBLICA</p>
                  </div>
                </div>
              </Button>

              <Button
                variant="ghost"
                className="h-24 bg-blue-50 hover:bg-blue-100 hover:scale-105 transition-all duration-300 hover:shadow-md rounded-xl border border-blue-200/50 group"
                onClick={() => handleNavigation('/informes-auditoria')}
              >
                <div className="text-center flex flex-col items-center space-y-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/2920/2920349.png" alt="Informes" className="w-8 h-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">INFORMES</h3>  
                    <p className="text-xs text-gray-600">DE AUDITORÍA</p>
                  </div>
                </div>
              </Button>

              <Button
                variant="ghost"
                className="h-24 bg-blue-50 hover:bg-blue-100 hover:scale-105 transition-all duration-300 hover:shadow-md rounded-xl border border-blue-200/50 group"
                onClick={() => handleNavigation('/archivo-digital')}
              >
                <div className="text-center flex flex-col items-center space-y-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" alt="Archivo" className="w-8 h-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">ARCHIVO</h3>
                    <p className="text-xs text-gray-600">DIGITAL</p>
                  </div>
                </div>
              </Button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default HomeContent;
