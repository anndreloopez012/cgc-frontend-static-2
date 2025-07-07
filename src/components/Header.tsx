
import React, { useState } from 'react';
import { ChevronDown, Menu, X, Home, Users, Scale, Settings, BookOpen, Link, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BentoMegaMenu from './BentoMegaMenu';
import MobileMenu from './MobileMenu';
import { useContentAPI } from '@/hooks/useContentAPI';

interface HeaderProps {
  showSidebarButton?: boolean;
  onSidebarButtonClick?: () => void;
}

/**
 * Componente Header principal
 * Maneja la navegación principal con menú flotante y menú móvil adaptativo
 * 
 * Características:
 * - Header fijo con backdrop blur
 * - Mega menú pegado directamente al nav
 * - Navegación responsive con iconos
 * - Estados de hover mejorados
 * - Botón de menú lateral para móviles/tablets (solo en home)
 */
const Header: React.FC<HeaderProps> = ({ showSidebarButton = false, onSidebarButtonClick }) => {
  // Estados para controlar la apertura de menús
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  // Obtener contenido desde la API simulada
  const { mainNavItems, isLoading } = useContentAPI();

  // Mapeo de iconos de string a componentes de React
  const iconMap: Record<string, React.ComponentType<any>> = {
    Home, Users, Scale, Settings, BookOpen, Link, Phone
  };

  /**
   * Maneja el evento de mouse enter para mostrar el mega menú
   */
  const handleMouseEnter = (key: string) => {
    setActiveMegaMenu(key);
  };

  /**
   * Maneja el evento de mouse leave para ocultar el mega menú
   */
  const handleMouseLeave = () => {
    setActiveMegaMenu(null);
  };

  /**
   * Alterna el estado del menú móvil
   */
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Mostrar loading si los datos aún se están cargando
  if (isLoading) {
    return (
      <div className="fixed top-4 left-4 right-4 z-50">
        <div className="bg-white/80 backdrop-blur-xl border border-gray-200/30 rounded-3xl shadow-2xl mx-auto max-w-7xl h-16 flex items-center justify-center">
          <div className="animate-pulse text-gray-500">Cargando...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Contenedor flotante del header */}
      <div className="fixed top-4 left-4 right-4 z-50">
        <header className="bg-white/80 backdrop-blur-xl border border-gray-200/30 rounded-3xl shadow-2xl mx-auto max-w-7xl">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo mejorado */}
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <div className="relative">
                    {/* Logo principal con gradiente */}
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-2xl shadow-xl flex items-center justify-center transform rotate-3">
                      <span className="text-white font-bold text-lg transform -rotate-3">C</span>
                    </div>
                    {/* Indicador decorativo */}
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full border-2 border-white shadow-lg"></div>
                  </div>
                  {/* Texto del logo */}
                  <div className="ml-3 hidden sm:block">
                    <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-800 via-purple-700 to-blue-900 bg-clip-text text-transparent tracking-wide">CGC</span>
                    <div className="text-xs text-gray-600 font-medium">Contraloría General</div>
                  </div>
                </div>
              </div>

              {/* Navegación de escritorio */}
              <nav className="hidden lg:flex items-center space-x-1">
                {mainNavItems.map((item) => {
                  const IconComponent = iconMap[item.icon];
                  return (
                    <div
                      key={item.key}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.key)}
                    >
                      <button className={`flex items-center px-3 xl:px-4 py-2 rounded-2xl font-medium transition-all duration-200 hover:bg-white/50 ${item.iconColor} text-sm xl:text-base`}>
                        {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
                        <span className="hidden xl:inline">{item.title}</span>
                        <span className="xl:hidden">{item.title.slice(0, 3)}</span>
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  );
                })}
              </nav>

              {/* Botones de la derecha */}
              <div className="flex items-center space-x-2">
                {/* Botón de menú lateral - Solo en móviles/tablets y en home */}
                {showSidebarButton && (
                  <Button
                    onClick={onSidebarButtonClick}
                    className="lg:hidden bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    size="sm"
                    aria-label="Abrir menú de servicios"
                  >
                    <Menu className="w-4 h-4 mr-2" />
                    <span className="text-xs">Servicios</span>
                  </Button>
                )}

                {/* Botón de menú móvil principal */}
                <div className="lg:hidden">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleMobileMenu}
                    className="rounded-2xl"
                    aria-label="Toggle mobile menu"
                  >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Espaciador para el header fijo */}
      <div className="h-24"></div>

      {/* Mega menú de escritorio - Pegado directamente al nav sin espacio */}
      <div 
        className="fixed top-20 left-0 right-0 z-40"
        onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
        onMouseLeave={handleMouseLeave}
      >
        <BentoMegaMenu 
          isOpen={!!activeMegaMenu} 
          activeMenu={activeMegaMenu}
          onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
          onMouseLeave={handleMouseLeave}
        />
      </div>

      {/* Menú móvil */}
      <MobileMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Header;
