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

import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../../redux/clients/clients.actions';
const ClientAdd = () => {
  const dispatch = useDispatch();
  const [ced, setCed] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fax, setFax] = useState('');
  const [tipo, setTipo] = useState('');
  const [limite, setLimite] = useState('');
  const [dias, setDias] = useState('');
  const [direccion, setDireccion] = useState('');
  const [cod_Cliente] = useState('01');


  function postClient(){
		dispatch(Actions.postClient({
      "cod_Cliente": cod_Cliente,
      "cedula": ced,
      "nom_Cliente":  name,
      "codTipo": "01",
      "tipo_Cliente": tipo,
      "telefono": telefono,
      "fax": fax,
      "celular": "N/A",
      "contacto": "N/A",
      "direccion": direccion,
      "email": email,
      "limite_Credito": limite,
      "dias": dias,
      "ultimo_Debito": "N/A",
      "ultimo_Credito": "N/A",
      "cliente_Gravado": "N/A",
      "fact_Limite_Exce": "N/A",
      "fact_Fact_Vencidos": "N/A",
      "desc_Max": "N/A",
      "forma_de_Pago": "N/A"
    }));
	}

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
            <span style={{fontWeight:'bold', lineHeight:'35px', fontSize:'20px'}}>Registrar nuevo cliente</span>
              {/* <DocsLink name="-Input"/> */}
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ced">Cédula</CLabel>
                    <CInput id="ced" placeholder="" required onChange={(e) => setCed(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="8">
                  <CFormGroup>
                    <CLabel htmlFor="name">Nombre</CLabel>
                    <CInput id="name" placeholder="" required onChange={(e) => setName(e.target.value)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="email">Email</CLabel>
                    <CInput id="email" placeholder="" required onChange={(e) => setEmail(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="telefono">Teléfono 1</CLabel>
                    <CInput id="telefono" placeholder="" required onChange={(e) => setTelefono(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="fax">Fax</CLabel>
                    <CInput id="fax" placeholder="" required onChange={(e) => setFax(e.target.value)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="3">
                <CFormGroup>
                    <CLabel htmlFor="tipo">Tipo Cliente</CLabel>
                    <CInput id="tipo" placeholder="" required onChange={(e) => setTipo(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                <CFormGroup>
                    <CLabel htmlFor="limite">Limite Crédito</CLabel>
                    <CInput id="limite" placeholder="" required onChange={(e) => setLimite(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                <CFormGroup>
                    <CLabel htmlFor="dias">Dias</CLabel>
                    <CInput id="dias" placeholder="" required onChange={(e) => setDias(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                <CFormGroup>
                    <CLabel htmlFor="direccion">Direccion</CLabel>
                    <CInput id="direccion" placeholder="" required onChange={(e) => setDireccion(e.target.value)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="info" onClick={() => postClient()} disabled>Registrar</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ClientAdd
