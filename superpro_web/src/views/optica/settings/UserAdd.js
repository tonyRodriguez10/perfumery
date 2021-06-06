import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import { useDispatch } from 'react-redux';
import * as Actions from '../../../redux/settings/settings.actions';

const UserAdd = () => {
  const dispatch = useDispatch();
  const [Usuario, setUsuario] = useState('');
  const [TipoUsuario, setTipoUsuario] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfPassword, setConfPassword] = useState('');

  const [CE_Articulos, setCE_Articulos] = React.useState(false);
  const handleCE_Articulos = event => {
    if(CE_Articulos===false)
    {
      setCE_Articulos(!CE_Articulos);
    }
    else{
      setCE_Articulos(!CE_Articulos);
    }
 }

  const [C_movInventario, setC_movInventario] = useState(false);
  const handleC_movInventario = event => {
    if(C_movInventario===false)
    {
      setC_movInventario(!C_movInventario);
    }
    else{
      setC_movInventario(!C_movInventario);
    }
 }
  
  const [D_Articulos, setD_Articulos] = useState(false);
  const handleD_Articulos = event => {
    if(D_Articulos===false)
    {
      setD_Articulos(!D_Articulos);
    }
    else{
      setD_Articulos(!D_Articulos);
    }
 }

  const [CE_Proveedores, setCE_Proveedores] = useState(false);
  const handleCE_Proveedores = event => {
    if(CE_Proveedores===false)
    {
      setCE_Proveedores(!CE_Proveedores);
    }
    else{
      setCE_Proveedores(!CE_Proveedores);
    }
 }

  const [C_compras, setC_compras] = useState(false);
  const handleC_compras = event => {
    if(C_compras===false)
    {
      setC_compras(!C_compras);
    }
    else{
      setC_compras(!C_compras);
    }
 }

  const [C_MovCxP, setC_MovCxP] = useState(false);
  const handleC_MovCxP = event => {
    if(C_MovCxP===false)
    {
      setC_MovCxP(!C_MovCxP);
    }
    else{
      setC_MovCxP(!C_MovCxP);
    }
 }

  const [Dev_compras, setDev_compras] = useState(false);
  const handleDev_compras = event => {
    if(Dev_compras===false)
    {
      setDev_compras(!Dev_compras);
    }
    else{
      setDev_compras(!Dev_compras);
    }
 }

  const [CE_Clientes, setCE_Clientes] = useState(false);
  const handleCE_Clientes = event => {
    if(CE_Clientes===false)
    {
      setCE_Clientes(!CE_Clientes);
    }
    else{
      setCE_Clientes(!CE_Clientes);
    }
 }

  const [AperturaCaja, set_AperturaCaja] = useState(false);
  const handleAperturaCaja = event => {
    if(AperturaCaja===false)
    {
      set_AperturaCaja(!AperturaCaja);
    }
    else{
      set_AperturaCaja(!AperturaCaja);
    }
 }
 
  const [CierreCaja, set_CierreCaja] = useState(false);
  const handleCierreCaja = event => {
    if(CierreCaja===false)
    {
      set_CierreCaja(!CierreCaja);
    }
    else{
      set_CierreCaja(!CierreCaja);
    }
 }

  const [Facturar, set_Facturar] = useState(false);
  const handleFacturar = event => {
    if(Facturar===false)
    {
      set_Facturar(!Facturar);
    }
    else{
      set_Facturar(!Facturar);
    }
 }

  const [C_MovCxC, setC_MovCxC] = useState(false);
  const handleC_MovCxC = event => {
    if(C_MovCxC===false)
    {
      setC_MovCxC(!C_MovCxC);
    }
    else{
      setC_MovCxC(!C_MovCxC);
    }
 }

  const [DA_Facturas, setDA_Facturas] = useState(false);
  const handleDA_Facturas = event => {
    if(DA_Facturas===false)
    {
      setDA_Facturas(!DA_Facturas);
    }
    else{
      setDA_Facturas(!DA_Facturas);
    }
 }

  const [R_Reportes, setR_Reportes] = useState(false);
  const handleR_Reportes = event => {
    if(R_Reportes===false)
    {
      setR_Reportes(!R_Reportes);
    }
    else{
      setR_Reportes(!R_Reportes);
    }
 }

  const [E_ValorsGen, setE_ValorsGen] = useState(false);
  const handleE_ValorsGen = event => {
    if(E_ValorsGen===false)
    {
      setE_ValorsGen(!E_ValorsGen);
    }
    else{
      setE_ValorsGen(!E_ValorsGen);
    }
 }

  const [E_CambiarParam, setE_CambiarParam] = useState(false);
  const handleE_CambiarParam = event => {
    if(E_CambiarParam===false)
    {
      setE_CambiarParam(!E_CambiarParam);
    }
    else{
      setE_CambiarParam(!E_CambiarParam);
    }
 }

  const [CE_UsuariosAndPermis, setCE_UsuariosAndPermis] = useState(false);
  const handleCE_UsuariosAndPermis = event => {
    if(CE_UsuariosAndPermis===false)
    {
      setCE_UsuariosAndPermis(!CE_UsuariosAndPermis);
    }
    else{
      setCE_UsuariosAndPermis(!CE_UsuariosAndPermis);
    }
 }

 const [Util_spool, setUtil_spool] = useState(false);
 const handleUtil_spool = event => {
    if(Util_spool===false)
    {
      setUtil_spool(!Util_spool);
    }
    else{
      setUtil_spool(!Util_spool);
    }
 }

  const [Contabilidad, setContabilidad] = useState(false);
  const handleContabilidad = event => {
    if(Contabilidad===false)
    {
      setContabilidad(!Contabilidad);
    }
    else{
      setContabilidad(!Contabilidad);
    }
 }
 const [Planillas, setPlanillas] = useState(false);
 const handlePlanillas = event => {
  if(Planillas===false)
  {
    setPlanillas(!Planillas);
  }
  else{
    setPlanillas(!Planillas);
  }
}

  const [Transportes, setTransportes] = useState(false);
  const handleTransportes = event => {
    if(Transportes===false)
    {
      setTransportes(!Transportes);
    }
    else{
      setTransportes(!Transportes);
    }
 }

  const [ServMedicos, setServMedicos] = useState(false);
  const handleServMedicos = event => {
    if(ServMedicos===false)
    {
      setServMedicos(!ServMedicos);
    }
    else{
      setServMedicos(!ServMedicos);
    }
 }

  const [Restaurantes, setRestaurantes] = useState(false);
  const handleRestaurantes = event => {
    if(Restaurantes===false)
    {
      setRestaurantes(!Restaurantes);
    }
    else{
      setRestaurantes(!Restaurantes);
    }
 }

  const [ComercioYServicios, setComercioYServicios] = useState(false);
  const handleComercioYServicios = event => {
    if(ComercioYServicios===false)
    {
      setComercioYServicios(!ComercioYServicios);
    }
    else{
      setComercioYServicios(!ComercioYServicios);
    }
 }

 function postUser(){
  dispatch(Actions.postUser({
    "id_Usuario_Glob": "",
    "nom_Usuario_Glob": Usuario,
    "tipo_Usuario_Glob": TipoUsuario,
    "contrasena_Glob": Password,
    "id_Usuario_Permisos_Glob": 0,
    "editar_Articulos_Glob": CE_Articulos,
    "reg_Movs_Inv_Glob": C_movInventario,
    "eliminar_Articulos_Glob": D_Articulos,
    "editar_Proveedores_Glob": CE_Proveedores,
    "registrar_Compras_Glob": C_compras,
    "reg_Movs_CxP_Glob": C_MovCxP,
    "reg_Devs_Compras_Glob": Dev_compras,
    "editar_Clientes_Glob": CE_Clientes,
    "reg_Apertura_Caja_Glob": AperturaCaja,
    "reg_Cierre_Caja_Glob": CierreCaja,
    "facturar_Glob": Facturar,
    "reg_Movs_CxC_Glob": C_MovCxC,
    "reg_Devs_Ventas_Glob": DA_Facturas,
    "ver_Reportes_Glob": R_Reportes,
    "editar_Valores_Glob": E_ValorsGen,
    "editar_Parametros_Glob": E_CambiarParam,
    "editar_Usuarios_Glob": CE_UsuariosAndPermis,
    "cajera_Utiliza_Spool_Glob": Util_spool,
    "sist_ContaFinanzas_Glob": Contabilidad,
    "sist_Planillas_Glob": Planillas,
    "sist_Trasportes_Glob": Transportes,
    "sist_Medicos_Glob": ServMedicos,
    "sist_Restaurante_Glob": Restaurantes,
    "sist_Servicios_Glob": ComercioYServicios
  }));
}

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
            <span style={{fontWeight:'bold', fontSize:'20px'}}>Registrar nuevo usuario</span>
              {/* <DocsLink name="-Input"/> */}
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="name">Usuario</CLabel>
                    <CInput id="name" placeholder=""  required onChange={(e) => setUsuario(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="ccmonth">Tipo de usuario</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth" required onChange={(e) => setTipoUsuario(e.target.value)}>
                      <option value="Administrador">Administrador</option>
                      <option value="Cajero">Cajero</option>
                      <option value="Vendedor">Vendedor</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="name">Contraseña</CLabel>
                    <CInput id="name" placeholder=""  required onChange={(e) => setPassword(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="name">Confirmar contraseña</CLabel>
                    <CInput id="name" placeholder=""  required onChange={(e) => setConfPassword(e.target.value)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              <hr></hr>
              <CRow>
                <CCol md="6">
                    <CLabel>Inventario</CLabel>
                      <CFormGroup variant="custom-checkbox">
                        <CInputCheckbox custom id="inline-checkbox1" name="inline-checkbox1"  checked={ CE_Articulos } onChange={ handleCE_Articulos } />
                        <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">Crear / Modificar artículos</CLabel>
                      </CFormGroup>
                      <CFormGroup variant="custom-checkbox">
                        <CInputCheckbox custom id="inline-checkbox2" name="inline-checkbox2"  checked={ C_movInventario } onChange={ handleC_movInventario } />
                        <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Realizar movimientos de inventario</CLabel>
                      </CFormGroup>
                      <CFormGroup variant="custom-checkbox">
                        <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3"  checked={ D_Articulos } onChange={ handleD_Articulos }/>
                        <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Eliminar artículos</CLabel>
                      </CFormGroup>
                </CCol>
        
                <CCol md="6">
                  <CLabel>Compras y Cuentas por Pagar</CLabel>
                  <CFormGroup variant="custom-checkbox">
                    <CInputCheckbox custom id="inline-checkbox4" name="inline-checkbox4"  checked={ CE_Proveedores } onChange={ handleCE_Proveedores } />
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox4">Crear / Modificar proveedores</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox">
                    <CInputCheckbox custom id="inline-checkbox5" name="inline-checkbox5"  checked={ C_compras } onChange={ handleC_compras }/>
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox5">Registrar compras</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox">
                    <CInputCheckbox custom id="inline-checkbox6" name="inline-checkbox6"  checked={ C_MovCxP } onChange={ handleC_MovCxP }/>
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox6">Registar movimientos de CxP</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox">
                    <CInputCheckbox custom id="inline-checkbox7" name="inline-checkbox7"  checked={ Dev_compras } onChange={ handleDev_compras }/>
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox7">Realizar devoluciones de compras</CLabel>
                  </CFormGroup>
                </CCol>
                </CRow>
                <hr></hr>
                <CRow>
                <CCol md="6">
                  <CLabel>Ventas y Cuentas por Cobrar</CLabel>
                  <CFormGroup variant="custom-checkbox">
                    <CInputCheckbox custom id="inline-checkbox8" name="inline-checkbox8"  checked={ CE_Clientes } onChange={ handleCE_Clientes }/>
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox8">Crear / Modificar clientes</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox">
                    <CInputCheckbox custom id="inline-checkbox9" name="inline-checkbox9"  checked={ AperturaCaja } onChange={ handleAperturaCaja }/>
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox9">Realizar apertura de caja</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox">
                    <CInputCheckbox custom id="inline-checkbox10" name="inline-checkbox10"  checked={ CierreCaja } onChange={ handleCierreCaja }/>
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox10">Realizar cierre de caja</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox">
                    <CInputCheckbox custom id="inline-checkbox11" name="inline-checkbox11"  checked={ Facturar } onChange={ handleFacturar }/>
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox11">Facturar</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox">
                    <CInputCheckbox custom id="inline-checkbox12" name="inline-checkbox12"  checked={ C_MovCxC } onChange={ handleC_MovCxC }/>
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox12">Registrar movimientos CxC y apartados</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox">
                    <CInputCheckbox custom id="inline-checkbox13" name="inline-checkbox13"  checked={ DA_Facturas } onChange={ handleDA_Facturas }/>
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox13">Realizar devoluciones y Anular facturas</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox">
                    <CInputCheckbox custom id="inline-checkbox24" name="inline-checkbox24"  checked={ Util_spool } onChange={ handleUtil_spool }/>
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox24">Utilizar Spool en Facturación(Para Cajer@)</CLabel>
                  </CFormGroup>
                </CCol>
                <CCol md="6">
                  <CLabel>Configuración y Reportes</CLabel>
                  <CFormGroup variant="custom-checkbox">
                    <CInputCheckbox custom id="inline-checkbox14" name="inline-checkbox14"  checked={ R_Reportes } onChange={ handleR_Reportes }/>
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox14">Ver reportes y listados</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox">
                    <CInputCheckbox custom id="inline-checkbox15" name="inline-checkbox15" checked={ E_ValorsGen } onChange={ handleE_ValorsGen }/>
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox15">Cambiar valores generales</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox">
                    <CInputCheckbox custom id="inline-checkbox16" name="inline-checkbox16"  checked={ E_CambiarParam } onChange={ handleE_CambiarParam }/>
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox16">Cambiar parámetros</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox">
                    <CInputCheckbox custom id="inline-checkbox17" name="inline-checkbox17"  checked={ CE_UsuariosAndPermis } onChange={ handleCE_UsuariosAndPermis }/>
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox17">Crear / Modificar usuarios y permisos</CLabel>
                  </CFormGroup>
                </CCol>
                </CRow>
                <hr></hr>
                <CRow>
                <CCol md="12">
                <CLabel>Acceso a Sistemas</CLabel>
                  <CFormGroup variant="custom-checkbox">
                    <CInputCheckbox custom id="inline-checkbox18" name="inline-checkbox18"  checked={ Contabilidad } onChange={ handleContabilidad }/>
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox18">Contabilidad y finanzas</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox">
                    <CInputCheckbox custom id="inline-checkbox19" name="inline-checkbox19"  checked={ Planillas } onChange={ handlePlanillas }/>
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox19">Planillas</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox">
                    <CInputCheckbox custom id="inline-checkbox20" name="inline-checkbox20" checked={ Transportes } onChange={ handleTransportes }/>
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox20">Transportes</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox">
                    <CInputCheckbox custom id="inline-checkbox21" name="inline-checkbox21"  checked={ ServMedicos } onChange={ handleServMedicos }/>
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox21">Servicios Médicos</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox">
                    <CInputCheckbox custom id="inline-checkbox22" name="inline-checkbox22"  checked={ Restaurantes } onChange={ handleRestaurantes }/>
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox22">Restaurantes</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox">
                    <CInputCheckbox custom id="inline-checkbox23" name="inline-checkbox23"  checked={ ComercioYServicios } onChange={ handleComercioYServicios }/>
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox23">Comercio y Servicios</CLabel>
                  </CFormGroup>
                </CCol>
                </CRow>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="info"  onClick={() => postUser()} disabled>Guardar</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default UserAdd
