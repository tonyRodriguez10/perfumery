import React from 'react'
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

import suppliersData from './SuppliersData'

const SupplierEdit = ({match}) => {
  const user = suppliersData.find( user => user.codigo.toString() === match.params.id)
  const userDetails = user ? Object.entries(user) : 
    [['codigo', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]
console.log(userDetails);
  return (
    <CRow>
      <CCol xs="12" sm="12">
        <CCard>
          <CCardHeader>
          <span style={{fontWeight:'bold', lineHeight:'35px', fontSize:'20px'}}>Editar datos del proveedor</span>
            {/* <DocsLink name="-Input"/> */}
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="name">Cédula</CLabel>
                  <CInput id="name" placeholder="" value={userDetails[1][1]} required />
                </CFormGroup>
              </CCol>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="name">Nombre</CLabel>
                  <CInput id="name" placeholder="" value={userDetails[2][1]} required />
                </CFormGroup>
              </CCol>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="name">Código</CLabel>
                  <CInput id="name" placeholder="" value={userDetails[0][1]} equired />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="ccnumber">Email</CLabel>
                  <CInput id="ccnumber" placeholder="" value={userDetails[3][1]} required />
                </CFormGroup>
              </CCol>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="ccnumber">Contacto</CLabel>
                  <CInput id="ccnumber" placeholder="" value={userDetails[7][1]} required />
                </CFormGroup>
              </CCol>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="ccnumber">Direccion</CLabel>
                  <CInput id="ccnumber" placeholder="" value={userDetails[11][1]} required />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="ccnumber">Teléfono</CLabel>
                  <CInput id="ccnumber" placeholder="" value={userDetails[4][1]} required />
                </CFormGroup>
              </CCol>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="ccnumber">Fax</CLabel>
                  <CInput id="ccnumber" placeholder="" value={userDetails[5][1]} required />
                </CFormGroup>
              </CCol>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="ccnumber">Celular</CLabel>
                  <CInput id="ccnumber" placeholder="" value={userDetails[6][1]} required />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="ccmonth">Tipo de proveedor</CLabel>
                  <CSelect custom name="ccmonth" id="ccmonth">
                    <option value="Tipo A">Tipo A</option>
                    <option value="Tipo B">Tipo B</option>
                    <option value="Tipo C">Tipo C</option>
                    <option value="...">...</option>
                  </CSelect>
                </CFormGroup>
              </CCol>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="ccnumber">Forma de pago Dias</CLabel>
                  <CInput id="ccnumber" placeholder="" value={userDetails[9][1]} required />
                </CFormGroup>
              </CCol>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="ccnumber">Límite de credito</CLabel>
                  <CInput id="ccnumber" placeholder="" value={userDetails[10][1]} required />
                </CFormGroup>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="info">Editar</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default SupplierEdit
