import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Navegación']
  },

  {/* Vista Inicio */
    _tag: 'CSidebarNavItem',
    name: 'Home',
    to: '/dashboard',
    icon: <CIcon customClasses="c-sidebar-nav-icon" src="pics/SuperProHome.png" width="40px" height="40px" style={{paddingRight:'5px'}}/>,
    /* badge: {
      color: 'warning ',
      text: 'Demo',
    } */
  },

  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Control de papelería',
  //   to: '/404',
  //   // to: '/controlPapeleria',
  //   icon: <CIcon customClasses="c-sidebar-nav-icon" src="pics/SuperProCopiar.png" width="40px" height="40px" style={{paddingRight:'5px'}}/>,
  // },

  /* {
    _tag: 'CSidebarNavItem',
    name: 'Clientes**',
    to: '/clientes',
    icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'warning ',
      text: 'Demo',
    }
  }, */

  {/* Opciones Inventario */
    _tag: 'CSidebarNavDropdown',
    name: 'Inventario',
    //route: '/buttons',
    icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon" src="pics/SuperProInventario2.png" width="40px" height="40px" style={{paddingRight:'5px'}}/>,
    badge: {
      color: 'warning ',
      text: 'Demo',
    },
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Artículos',
        to: '/articulos',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Lineas',
        to: '/lineas',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Familias',
        to: '/familias',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Ubicaciones',
        to: '/ubicaciones',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Movimientos',
        to: '/movimientos',
      }
    ],
  },
  /* {
    _tag: 'CSidebarNavItem',
    name: 'Movimientos de inventario',
    //route: '/buttons',
    icon: <CIcon name="cil-share" customClasses="c-sidebar-nav-icon"/>,
    to: '/404',
  }, */
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Clientes',
    //route: '/buttons',
    icon:<CIcon name="cil-user" customClasses="c-sidebar-nav-icon" src="pics/SuperProClientes.png" width="40px" height="40px" style={{paddingRight:'5px'}}/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Lista de Clientes',
        to: '/clientes',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tipos de Clientes',
        to: '/clientesTipo',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Cuentas por Cobrar',
        to: '/cuentasPorCobrar',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Proveedores',
    //route: '/buttons',
    icon: <CIcon customClasses="c-sidebar-nav-icon" src="pics/SuperProProveedores.png" width="40px" height="40px" style={{paddingRight:'5px'}}/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Lista de Proveedores',
        to: '/proveedores',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tipos de Proveedores',
        to: '/proveedoresTipo',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Cuentas por Pagar',
        to: '/cuentasPorPagar',
      }
    ],
  },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'OptiControl',
  //   //route: '/buttons',
  //   icon: <CIcon customClasses="c-sidebar-nav-icon" src="pics/SuperProOptiControl.png" width="40px" height="40px" style={{paddingRight:'5px'}}/>,
  //   _children: [
  //     /* {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Lentes normales',
  //       to: '/lentesnormales-registro',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Lentes de contacto',
  //       to: '/lentescontacto-registro',
  //     }, */
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Diagnósticos',
  //       to: '/diagnosticos-registro',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Doctores',
  //       to: '/doctores',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Pacientes',
  //       to: '/pacientes',
  //     },
  //   ],
  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Compras',
    //route: '/buttons',
    icon: <CIcon customClasses="c-sidebar-nav-icon" src="pics/SuperProCompras.png" width="40px" height="40px" style={{paddingRight:'5px'}}/>,
    _children: [
      /* {
        _tag: 'CSidebarNavItem',
        name: 'Registros de compras',
        to: '/compra-registro',
      }, */
      {
        _tag: 'CSidebarNavItem',
        name: 'Búsqueda de Artículos',
        to: '/404',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Búsqueda de Proveedores',
        to: '/404',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Facturación',
    //route: '/buttons',
    icon: <CIcon customClasses="c-sidebar-nav-icon" src="pics/SuperProFacturacion.png" width="40px" height="40px" style={{paddingRight:'5px'}}/>,

    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Facturas',
        to: '/404',
        // to: '/facturas-registro',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Vendedores',
        to: '/404',
        // to: '/vendedor-registro',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Abrir/Cerrar Caja',
        to: '/404',
        // to: '/caja',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Notas de Crédito',
        to: '/404',
        // to: '/anulacion-devolucion',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Reportes',
    //route: '/buttons',
    icon: <CIcon customClasses="c-sidebar-nav-icon" src="pics/SuperProReporteMédico.png" width="40px" height="40px" style={{paddingRight:'5px'}}/>,
    _children: [
      {
        _tag: 'CSidebarNavDropdown',
        name: 'Ventas',
        to: '/404',
        _children: [
          {
            _tag: 'CSidebarNavItem',
            name: 'Ventas Historicas',
            to: '/ventasHistoricas',
            // to: '/facturas-registro',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Ventas x Cliente',
            to: '/ventasxCliente',
            // to: '/facturas-registro',
          },
        ],
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Compras',
        to: '/404',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Inventario',
        to: '/404',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'etc...',
        to: '/404',
      }
    ],
  },
  /* {
    _tag: 'CSidebarNavTitle',
    _children: ['Theme']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Colors',
    to: '/theme/colors',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Typography',
    to: '/theme/typography',
    icon: 'cil-pencil',
  }, */
  /* {
    _tag: 'CSidebarNavDropdown',
    name: 'Base',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Cards',
        to: '/base/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Forms',
        to: '/base/forms',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Jumbotron',
        to: '/base/jumbotrons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Navs',
        to: '/base/navs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Navbars',
        to: '/base/navbars',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Progress',
        to: '/base/progress-bar',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Switches',
        to: '/base/switches',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tables',
        to: '/base/tables',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tabs',
        to: '/base/tabs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  }, */
  /* {
    _tag: 'CSidebarNavDropdown',
    name: 'Buttons',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Brand buttons',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Dropdowns',
        to: '/buttons/button-dropdowns',
      }
    ],
  }, */
  /* {
    _tag: 'CSidebarNavItem',
    name: 'Charts',
    to: '/charts',
    icon: 'cil-chart-pie'
  }, */
  /* {
    _tag: 'CSidebarNavDropdown',
    name: 'Icons',
    route: '/icons',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Notifications',
    route: '/notifications',
    icon: 'cil-bell',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Toaster',
        to: '/notifications/toaster'
      }
    ]
  }, */
  /* {
    _tag: 'CSidebarNavItem',
    name: 'Widgets',
    to: '/widgets',
    icon: 'cil-calculator',
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _tag: 'CSidebarNavDivider'
  }, */
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Configuración',
    //route: '/buttons',
    icon: <CIcon customClasses="c-sidebar-nav-icon" src="pics/SuperProConfiguración.png" width="40px" height="40px" style={{paddingRight:'5px'}}/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Usuarios',
        to: '/usuarios',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Perfil de empresa',
        to: '/perfilEmpresa',
      }
    ],
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Iniciar Sesión'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Ingreso',
    to: '/login',
    icon: <CIcon customClasses="c-sidebar-nav-icon" src="pics/SuperProLogin.png" width="40px" height="40px" style={{paddingRight:'5px'}}/>,
  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Registro',
  //   to: '/register',
  // },
 
  /* {
    _tag: 'CSidebarNavItem',
    name: 'Disabled',
    icon: 'cil-ban',
    badge: {
      color: 'secondary',
      text: 'NEW',
    },
    addLinkClass: 'c-disabled',
    'disabled': true
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }, */
  /* {
    _tag: 'CSidebarNavTitle',
    _children: ['Labels']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label danger',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-danger'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label info',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-info'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label warning',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-warning'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  } */
]

export default _nav
