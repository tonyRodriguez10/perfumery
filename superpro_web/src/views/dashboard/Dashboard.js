import React, { lazy, useState } from 'react'
import { Link } from 'react-router-dom';
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CCollapse,
  CFade,
  CSwitch,
  CLink,
  CWidgetIcon,
  CWidgetProgress,
  CWidgetProgressIcon
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

import MainChartExample from '../charts/MainChartExample.js'
import "moment/locale/es";
import moment from 'moment';

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  const [time] = useState(moment());
  const [today] = React.useState(time.format('HH:mm:ss'));

  return (
    <>
      <CCard>
        <div className="card-body">
           <h1 style={{fontSize:'80px', textAlign:'center'}} > Hola! <b>{today > '12:00"00' ? 'Buenas Tardes' : 'Buenos Días'}</b>, bienvenido.</h1>
          <hr></hr>
        </div>
      </CCard>

      <CRow>
        <CCol xs="12" sm="6" lg="3">
        <CWidgetIcon header="FACTURACIÓN" color="info" text="Ir a Facturacion">
        <a href="http://perfumania.unibitec.com/#/404"> <img border="0" alt="W3Schools" src="pics/SuperProFacturacion.png" width="50" height="50"/></a>
        </CWidgetIcon>
        </CCol>
        <CCol xs="12" sm="6" lg="3">
        <CWidgetIcon header="Inventario"  color="info" text="Ir a Inventario">
        <a href="http://perfumania.unibitec.com/#/articulos"> <img border="0" alt="W3Schools" src="pics/SuperProInventario2.png" width="50" height="50"/></a>
        </CWidgetIcon>
        </CCol>
        <CCol xs="12" sm="6" lg="3">
        <CWidgetIcon header="PROVEEDORES" text="Ir a Proveedores" color="info" >
        <a href="http://perfumania.unibitec.com/#/proveedores"> <img border="0" alt="W3Schools" src="pics/SuperProProveedores.png" width="50" height="50"/></a>
        </CWidgetIcon>
        </CCol>
        <CCol xs="12" sm="6" lg="3">
        <CWidgetIcon header="CLIENTES" text="Ir a Clientes" color="info" >
        <a href="http://perfumania.unibitec.com/#/clientes"> <img border="0" alt="W3Schools" src="pics/SuperProClientes.png" width="50" height="50"/></a>
        </CWidgetIcon>
        </CCol>

        <CCol xs="12" sm="6" lg="3">
        <CWidgetIcon header="LOGIN" text="Iniciar sesión" color="info" >
        <a href="http://perfumania.unibitec.com/#/login"> <img border="0" alt="W3Schools" src="pics/SuperProLogin.png" width="50" height="50"/></a>
        </CWidgetIcon>
        </CCol>
        <CCol xs="12" sm="6" lg="3">
        <CWidgetIcon header="COMPRAS" text="Ir a Compras" color="info" >
        <a href="http://perfumania.unibitec.com/#/404"> <img border="0" alt="W3Schools" src="pics/SuperProCompras.png" width="50" height="50"/></a>
        </CWidgetIcon>
        </CCol>
        <CCol xs="12" sm="6" lg="3" href="/Usuarios">
        <CWidgetIcon header="REPORTES" text="Ir a Reportes" color="info">
        <a href="http://perfumania.unibitec.com/#/404"> <img border="0" alt="W3Schools" src="pics/SuperProReporteMédico.png" width="50" height="50"/></a>
        </CWidgetIcon>
        </CCol>
        <CCol xs="12" sm="6" lg="3">
        <CWidgetIcon header="CONFIGURACION" text="Ir a Configuracion" color="info" >
        <a href="http://perfumania.unibitec.com/#/usuarios"> <img border="0" alt="W3Schools" src="pics/SuperProConfiguración.png" width="50" height="50"/></a>
        </CWidgetIcon>
        </CCol>

      </CRow>
    </>
  )
}

export default Dashboard
