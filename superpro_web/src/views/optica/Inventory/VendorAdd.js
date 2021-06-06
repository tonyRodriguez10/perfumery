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

const VendorAdd = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
            <span style={{fontWeight:'bold', lineHeight:'35px', fontSize:'20px'}}>Registrar nuevo agente</span>
              {/* <DocsLink name="-Input"/> */}
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Nombre agente</CLabel>
                    <CInput id="name" placeholder="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Teléfono Celular</CLabel>
                    <CInput id="name" placeholder="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Teléfono Habitación</CLabel>
                    <CInput id="name" placeholder="" required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccyear">Usuario asociado</CLabel>
                    <CSelect custom name="ccyear" id="ccyear">
                      <option value="San Rafael Arriba">Laura</option>
                      <option value="San Rafael Abajo">Diego</option>
                      <option value="Gravilias">Julia</option>
                      <option value="Gravilias">...</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccyear">Ubicación asociada</CLabel>
                    <CSelect custom name="ccyear" id="ccyear">
                      <option value="San Rafael Arriba">Ubicación general</option>
                      <option value="Gravilias">...</option>
                    </CSelect>
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

export default VendorAdd
