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
import { DocsLink } from 'src/reusable'

const Company = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
            <span style={{fontWeight:'bold', fontSize:'20px'}}>Perfil de la empresa</span>
              {/* <DocsLink name="-Input"/> */}
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Cédula</CLabel>
                    <CInput id="name" placeholder="" value="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Nombre de la empresa</CLabel>
                    <CInput id="name" placeholder="" value="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Propietario de la empresa</CLabel>
                    <CInput id="name" placeholder="" value="" required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">email</CLabel>
                    <CInput id="name" placeholder="" value="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Dirección</CLabel>
                    <CInput id="name" placeholder="" value="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Mes en proceso</CLabel>
                    <CInput id="name" placeholder="" value="" required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="name">Teléfono</CLabel>
                    <CInput id="name" placeholder="" value="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="name">Fax</CLabel>
                    <CInput id="name" placeholder="" value="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="name">Tipo cambio</CLabel>
                    <CInput id="name" placeholder="" value="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="name">Impuesto Ventas</CLabel>
                    <CInput id="name" placeholder="" value="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="name">Impuesto Consumo</CLabel>
                    <CInput id="name" placeholder="" value="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="name">Impuesto Servicio</CLabel>
                    <CInput id="name" placeholder="" value="" required />
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="info" disabled>Guardar</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Company
