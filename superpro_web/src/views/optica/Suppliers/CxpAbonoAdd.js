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
import * as Actions from '../../../redux/suppliers/suppliers.actions';
import { useDispatch } from 'react-redux';
const CxpAbonoAdd = () => {
  const dispatch = useDispatch();
  const [prov, setProv] = useState('');
  const [numFact, setNumFact] = useState('');
  const [cantFact, setCantFact] = useState('');
  const [saldTot, setSaldTot] = useState('');
  const [montAbo, setMontAbo] = useState('');


  function postCxpAbono(){
		dispatch(Actions.postCxpAbono({
      "compra_Afectada": numFact,
      "ID_proveedor": prov,
      "fecha_Movimiento": new Date().toLocaleString(),
      "tipo_Movimiento": "Entrada",
      "saldo_Anterior_Compra": 0,
      "monto_Movimiento": montAbo,
      "saldo_Actual_Compra": saldTot,
      "usuario": 0,
      "estado": "string",
      "num_Terminal": 0,
      "id_Empresa": 0
    }));
	}

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
            <span style={{fontWeight:'bold', lineHeight:'35px', fontSize:'20px'}}>Cuenta por pagar: Registrar nuevo abono</span>
              {/* <DocsLink name="-Input"/> */}
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="prov">Proveedor</CLabel>
                    <CInput id="prov" placeholder=""  required onChange={(e) => setProv(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="numFact">Número Factura</CLabel>
                    <CInput id="numFact" placeholder="" required onChange={(e) => setNumFact(e.target.value)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="cantFact">Cantidad de Facturas</CLabel>
                    <CInput id="cantFact" placeholder=""  required onChange={(e) => setCantFact(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="saldTot">Saldo Total</CLabel>
                    <CInput id="saldTot" placeholder=""  required onChange={(e) => setSaldTot(e.target.value)}/>
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
              <CButton type="submit" size="sm" color="info" onClick={() => postCxpAbono()} disabled>Registrar</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default CxpAbonoAdd
