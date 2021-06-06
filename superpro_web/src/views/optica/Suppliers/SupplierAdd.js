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
import { useDispatch } from 'react-redux'
import * as Actions from '../../../redux/suppliers/suppliers.actions';

const SupplierAdd = () => {
  const dispatch = useDispatch();
  const [ced, setCed] = useState('');
  const [name, setName] = useState('');
  const [cod, setCod] = useState('');
  const [email, setEmail] = useState('');
  const [contacto, setContacto] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fax, setFax] = useState('');
  const [celular, setCelular] = useState('');
  const [tipoProv, setTipProv] = useState('');
  const [dias, setDias] = useState('');
  const [limite, setLimite] = useState('');


  function postSupplier(){
		dispatch(Actions.postSupplier({
      "codigo": cod,
      "cedula": ced,
      "nombre":name,
      "codTipo":tipoProv,
      "telefono":telefono,
      "fax":fax,
      "celular":celular,
      "contacto":contacto,
      "direccion":direccion,
      "email":email,
      "limite":limite,
      "dias":dias
    }));
	}
  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
            <span style={{fontWeight:'bold', lineHeight:'35px', fontSize:'20px'}}>Registrar nuevo proveedor</span>
              {/* <DocsLink name="-Input"/> */}
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Cédula</CLabel>
                    <CInput id="name" placeholder="" required onChange={(e) => setCed(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Nombre</CLabel>
                    <CInput id="name" placeholder="" required onChange={(e) => setName(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Código</CLabel>
                    <CInput id="name" placeholder="" required onChange={(e) => setCod(e.target.value)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccnumber">Email</CLabel>
                    <CInput id="ccnumber" placeholder="" required onChange={(e) => setEmail(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccnumber">Contacto</CLabel>
                    <CInput id="ccnumber" placeholder="" required onChange={(e) => setContacto(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccnumber">Direccion</CLabel>
                    <CInput id="ccnumber" placeholder="" required onChange={(e) => setDireccion(e.target.value)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccnumber">Teléfono</CLabel>
                    <CInput id="ccnumber" placeholder="" required onChange={(e) => setTelefono(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccnumber">Fax</CLabel>
                    <CInput id="ccnumber" placeholder="" required onChange={(e) => setFax(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccnumber">Celular</CLabel>
                    <CInput id="ccnumber" placeholder="" required onChange={(e) => setCelular(e.target.value)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccmonth">Tipo de proveedor</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth" onChange={(e) => setTipProv(e.target.value)}>
                      <option value="0">Tipo A</option>
                      <option value="1">Tipo B</option>
                      <option value="2">Tipo C</option>
                      <option value="...">...</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccnumber">Forma de pago Dias</CLabel>
                    <CInput id="ccnumber" placeholder="" required onChange={(e) => setDias(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccnumber">Límite de credito</CLabel>
                    <CInput id="ccnumber" placeholder="" required onChange={(e) => setLimite(e.target.value)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="info" onClick={() => postSupplier()} disabled>Registrar</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default SupplierAdd
