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
import * as Actions from '../../../redux/clients/clients.actions';

const CxcAbonoAdd = () => {
  const dispatch = useDispatch();
  const [cliente, setCliente] = useState('');
  const [numFactura, setNumFactura] = useState('');
  const [cantFacturas, setCantFacturas] = useState('');
  const [saldTotal, setSaldTotal] = useState('');
  const [montAbo, setMontAbo] = useState('');


  function postCxcAbono(){
		dispatch(Actions.postCxcAbono({
      "usuario": cliente,
      "factura_Afectada": numFactura,
      // "cantFacturas":email,
      "saldo_Actual_Factura":saldTotal,
      "monto_Movimiento":montAbo,
    }));
	}

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
            <span style={{fontWeight:'bold', lineHeight:'35px', fontSize:'20px'}}>Cuenta por cobrar: Registrar nuevo abono</span>
              {/* <DocsLink name="-Input"/> */}
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="cliente">Cliente</CLabel>
                    <CInput id="cliente" placeholder="" required onChange={(e) => setCliente(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="numFactura">Número Factura</CLabel>
                    <CInput id="numFactura" placeholder="" required onChange={(e) => setNumFactura(e.target.value)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="cantFacturas">Cantidad de Facturas</CLabel>
                    <CInput id="cantFacturas" placeholder="" required onChange={(e) => setCantFacturas(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="saldTotal">Saldo Total</CLabel>
                    <CInput id="saldTotal" placeholder="" required onChange={(e) => setSaldTotal(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="montAbo">Monto abono</CLabel>
                    <CInput id="montAbo" placeholder="" required onChange={(e) => setMontAbo(e.target.value)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="info"  onClick={() => postCxcAbono()} disabled>Registrar</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default CxcAbonoAdd
