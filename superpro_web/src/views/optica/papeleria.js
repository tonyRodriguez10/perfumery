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

const Papeleria = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
            <span style={{fontWeight:'bold', fontSize:'20px'}}>Control de papelería</span>
              {/* <DocsLink name="-Input"/> */}
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="name">Cliente</CLabel>
                    <CInput id="name" placeholder="" value="Elvia Blanco" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="name">Mes por procesar</CLabel>
                    <CInput type="month" id="name" placeholder="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="name">Fecha de recepción</CLabel>
                    <CInput type="date" id="name" placeholder=""  required />
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="name">Fecha de devolución</CLabel>
                    <CInput type="date" id="name" placeholder=""  required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <hr></hr>
              <CFormGroup row>
                <CCol md="9">
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="inline-checkbox1" name="inline-checkbox1" value="option1" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">Datos digitados</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Contabilidad realizada</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Papelería archivada</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="inline-checkbox4" name="inline-checkbox4" value="option2" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox4">Documentos entregados</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="inline-checkbox5" name="inline-checkbox5" value="option3" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox5">Servicios cobrados</CLabel>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="info">Guardar</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Papeleria
