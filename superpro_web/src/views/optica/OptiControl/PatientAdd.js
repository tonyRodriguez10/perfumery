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

const PatientAdd = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
            <span style={{fontWeight:'bold', lineHeight:'35px', fontSize:'20px'}}>Registrar nuevo paciente</span>
              {/* <DocsLink name="-Input"/> */}
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="name">Nombre</CLabel>
                    <CInput id="name" placeholder="" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="name">Edad</CLabel>
                    <CInput id="name" placeholder="" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="name">Sexo</CLabel>
                    <CInput id="name" placeholder="" required />
                    </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="name">Teléfono</CLabel>
                    <CInput id="name" placeholder="" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="name">Fecha de nacimiento</CLabel>
                    <CInput id="name" placeholder="" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="name">Ocupación</CLabel>
                    <CInput id="name" placeholder="" required />
                    </CFormGroup>
                </CCol>
              </CRow>
          </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="info">Registrar</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default PatientAdd
