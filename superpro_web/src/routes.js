import React from 'react';

/* ------------------------------------------------------------------------------------*/
/* ----------------------------- CoreUI Views -----------------------------------------*/
const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));
const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));
const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));

/* ------------------------------------------------------------------------------------*/
/* ----------------------------- Optica Jiménez Views ---------------------------------*/
//CLIENTS
const ClientsList = React.lazy(() => import('./views/optica/Clients/ClientsList'));
const ClientEdit = React.lazy(() => import('./views/optica/Clients/ClientEdit'));
const ClientAdd = React.lazy(() => import('./views/optica/Clients/ClientAdd'));
const ClientsTypeList = React.lazy(() => import('./views/optica/Clients/ClientsTypeList'));
const ClientTypeEdit = React.lazy(() => import('./views/optica/Clients/ClientTypeEdit'));
const ClientTypeAdd = React.lazy(() => import('./views/optica/Clients/ClientTypeAdd'));
const CxcList = React.lazy(() => import('./views/optica/Clients/CxcList'));
const CxcAbonoAdd = React.lazy(() => import('./views/optica/Clients/CxcAbonoAdd'));
const Papeleria = React.lazy(() => import('./views/optica/papeleria'));
//SUPPLIERS
const SuppliersList = React.lazy(() => import('./views/optica/Suppliers/SuppliersList'));
const SupplierEdit = React.lazy(() => import('./views/optica/Suppliers/SupplierEdit'));
const SupplierAdd = React.lazy(() => import('./views/optica/Suppliers/SupplierAdd'));
const SuppliersTypeList = React.lazy(() => import('./views/optica/Suppliers/SuppliersTypeList'));
const SupplierTypeEdit = React.lazy(() => import('./views/optica/Suppliers/SupplierTypeEdit'));
const SupplierTypeAdd = React.lazy(() => import('./views/optica/Suppliers/SupplierTypeAdd'));
const CxpList = React.lazy(() => import('./views/optica/Suppliers/CxpList'));
const CxpAbonoAdd = React.lazy(() => import('./views/optica/Suppliers/CxpAbonoAdd'));
//INVENTORY
const ArticlesList = React.lazy(() => import('./views/optica/Inventory/ArticlesList'));
const ArticleEdit = React.lazy(() => import('./views/optica/Inventory/ArticleEdit'));
const ArticleAdd = React.lazy(() => import('./views/optica/Inventory/ArticleAdd'));
const FamiliesList = React.lazy(() => import('./views/optica/Inventory/FamiliesList'));
const FamilyEdit = React.lazy(() => import('./views/optica/Inventory/FamilyEdit'));
const FamilyAdd = React.lazy(() => import('./views/optica/Inventory/FamilyAdd'));
const LinesList = React.lazy(() => import('./views/optica/Inventory/LinesList'));
const LineEdit = React.lazy(() => import('./views/optica/Inventory/LineEdit'));
const LineAdd = React.lazy(() => import('./views/optica/Inventory/LineAdd'));
const LocationsList = React.lazy(() => import('./views/optica/Inventory/LocationsList'));
const LocationEdit = React.lazy(() => import('./views/optica/Inventory/LocationEdit'));
const LocationAdd = React.lazy(() => import('./views/optica/Inventory/LocationAdd'));
const MovementsList = React.lazy(() => import('./views/optica/Inventory/MovementsList'));
const MovementAdd = React.lazy(() => import('./views/optica/Inventory/MovementAdd'));
const VendorAdd = React.lazy(() => import('./views/optica/Inventory/VendorAdd'));
//OPTICS
const PatientsList = React.lazy(() => import('./views/optica/OptiControl/PatientsList'));
const PatientEdit = React.lazy(() => import('./views/optica/OptiControl/PatientEdit'));
const PatientAdd = React.lazy(() => import('./views/optica/OptiControl/PatientAdd'));
const DoctorsList = React.lazy(() => import('./views/optica/OptiControl/DoctorsList'));
const DoctorEdit = React.lazy(() => import('./views/optica/OptiControl/DoctorEdit'));
const DoctorAdd = React.lazy(() => import('./views/optica/OptiControl/DoctorAdd'));
const DiagnosticList = React.lazy(() => import('./views/optica/OptiControl/DiagnosticList'));
const DiagnosticAdd = React.lazy(() => import('./views/optica/OptiControl/DiagnosticAdd'));
const NormalLensAdd = React.lazy(() => import('./views/optica/OptiControl/normalLensAdd'));
const ContactLensAdd = React.lazy(() => import('./views/optica/OptiControl/contactLensAdd'));
//SYSTEM
const UserList = React.lazy(() => import('./views/optica/settings/UserList'));
const UserAdd = React.lazy(() => import('./views/optica/settings/UserAdd'));
const Company = React.lazy(() => import('./views/optica/settings/Company'));
//INVOICE
const Invoice = React.lazy(() => import('./views/optica/Invoice/Invoice'));
const Box = React.lazy(() => import('./views/optica/Invoice/Box'));
const CreditNote = React.lazy(() => import('./views/optica/Invoice/CreditNote'));
//PURCHASES
const PurchaseAdd = React.lazy(() => import('./views/optica/Purchases/PurchaseAdd'));
//OTHERS
const TableExp = React.lazy(() => import('./views/optica/avanzada'));
const ModalsOpt = React.lazy(() => import('./views/optica/Modals'));
//REPORTES
const ventasHistoricas = React.lazy(() => import('./views/optica/reports/ventasHistoricas'));
const ventasxCliente = React.lazy(() => import('./views/optica/reports/ventasxCliente'));

const routes = [
  /* ------------------------------------------------------------------------------------*/
  /* ----------------------------- CoreUI Views -----------------------------------------*/
  { path: '/', exact: true, name: 'Inicio' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/iconos', exact: true, name: 'Iconos', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },

  /* ------------------------------------------------------------------------------------*/
  /* ----------------------------- Optica Jiménez Views ---------------------------------*/
  //CLIENTS
  { path: '/clientes', exact: true,  name: 'Clientes', component: ClientsList },
  { path: '/cliente/:id', exact: true, name: 'Edición del cliente', component: ClientEdit },
  { path: '/clientes-registro', name: 'Registro Clientes', component: ClientAdd },
  { path: '/clientesTipo', exact: true,  name: 'Tipos de Clientes', component: ClientsTypeList },
  { path: '/clienteTipo/:id', exact: true, name: 'Edición del tipo de cliente', component: ClientTypeEdit},
  { path: '/clientesTipo-registro', name: 'Registro Tipos de Clientes', component: ClientTypeAdd },
  { path: '/cuentasPorCobrar-abono', name: 'Cuentas por Cobrar - Registro Abono', component: CxcAbonoAdd },
  { path: '/cuentasPorCobrar', exact: true,  name: 'Cuentas por Cobrar', component: CxcList },
  { path: '/controlPapeleria', exact: true,  name: 'Control de papelería', component: Papeleria },
  //SUPPLIERS
  { path: '/proveedores', exact: true,  name: 'Proveedores', component: SuppliersList },
  { path: '/proveedor/:id', exact: true, name: 'Edición del proveedor', component: SupplierEdit },
  { path: '/proveedores-registro', name: 'Registro Proveedor', component: SupplierAdd },
  { path: '/proveedoresTipo', exact: true,  name: 'Tipos de Proveedores', component: SuppliersTypeList },
  { path: '/proveedorTipo/:id', exact: true, name: 'Edición del tipo de proveedor', component: SupplierTypeEdit},
  { path: '/proveedoresTipo-registro', name: 'Registro Tipos de Proveedores', component: SupplierTypeAdd },
  { path: '/cuentasPorPagar-abono', name: 'Cuentas por Pagar - Registro Abono', component: CxpAbonoAdd },
  { path: '/cuentasPorPagar', exact: true,  name: 'Cuentas por Pagar', component: CxpList },
  //INVENTORY
  { path: '/articulos', exact: true,  name: 'Artículos', component: ArticlesList },
  { path: '/articulo/:id', exact: true, name: 'Edición del artículo', component: ArticleEdit },
  { path: '/articulos-registro', name: 'Registro Artículos', component: ArticleAdd },
  { path: '/familias', exact: true,  name: 'Familias', component: FamiliesList },
  { path: '/familia/:id', exact: true, name: 'Edición de la familia', component: FamilyEdit},
  { path: '/familias-registro', name: 'Registro Familias', component: FamilyAdd },
  { path: '/lineas', exact: true,  name: 'Lineas', component: LinesList },
  { path: '/linea/:id', exact: true, name: 'Edición de la linea', component: LineEdit},
  { path: '/lineas-registro', name: 'Registro Lineas', component: LineAdd },
  { path: '/ubicaciones', exact: true,  name: 'Ubicaciones', component: LocationsList },
  { path: '/ubicacion/:id', exact: true, name: 'Edición de la ubicacion', component: LocationEdit},
  { path: '/ubicaciones-registro', name: 'Registro Ubicaciones', component: LocationAdd },
  { path: '/movimientos', exact: true,  name: 'Movimientos', component: MovementsList },
  { path: '/movimientos-registro', name: 'Registro Movimientos', component: MovementAdd },
  //OPTICS
  { path: '/pacientes', exact: true,  name: 'Pacientes', component: PatientsList },
  { path: '/paciente/:id', exact: true, name: 'Edición del paciente', component: PatientEdit},
  { path: '/pacientes-registro', name: 'Registro Pacientes', component: PatientAdd },
  { path: '/doctores', exact: true,  name: 'Doctores', component: DoctorsList },
  { path: '/doctor/:id', exact: true, name: 'Edición del doctor', component: DoctorEdit},
  { path: '/doctores-registro', name: 'Registro Doctores', component: DoctorAdd },
  { path: '/diagnosticos', exact: true,  name: 'Diagnosticos', component: DiagnosticList },
  { path: '/diagnosticos-registro', name: 'Registro Diagnosticos', component: DiagnosticAdd },
  { path: '/lentesnormales-registro', name: 'Registro Lentes Normales', component: NormalLensAdd },
  { path: '/lentescontacto-registro', name: 'Registro Lentes Normales', component: ContactLensAdd },
  //SYSTEM
  { path: '/usuarios', name: 'Usuarios', component: UserList },
  { path: '/usuarios-registro', name: 'Registro Usuarios', component: UserAdd },
  { path: '/perfilEmpresa', name: 'Perfil de la empresa', component: Company },
  //INVOICE
  { path: '/facturas-registro', name: 'Registro Facturas', component: Invoice },
  { path: '/vendedor-registro', name: 'Registro Vendedores', component: VendorAdd },
  { path: '/caja', name: 'Apertura/Cierre Caja', component: Box },
  { path: '/anulacion-devolucion', name: 'Notas de crédito', component: CreditNote },
  //PURCHASES
  { path: '/compra-registro', name: 'Registro Compras', component: PurchaseAdd },
  //OTHERS
  { path: '/tablaexp', name: 'TableExp', component: TableExp },
  { path: '/ventanas', name: 'Ventanas Emergentes', component: ModalsOpt },
  //REPORTES
  { path: '/ventasHistoricas', name: 'Ventas Historicas', component: ventasHistoricas },
  { path: '/ventasxCliente', name: 'Ventas Cliente', component: ventasxCliente }

];

export default routes;