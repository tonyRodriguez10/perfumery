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

import clientsData from './ClientesData'

const ClientEdit = ({match}) => {
  const user = clientsData.find( user => user.id.toString() === match.params.id)
  const userDetails = user ? Object.entries(user) : 
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]
console.log(userDetails);
  return (
    <CRow>
      <CCol xs="12" sm="12">
        <CCard>
          <CCardHeader>
          <span style={{fontWeight:'bold', lineHeight:'35px', fontSize:'20px'}}>Editar datos del cliente</span>{/* {match.params.id} */}
          </CCardHeader>
          <CCardBody>
              <CRow>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="name">Cédula</CLabel>
                    <CInput id="name" placeholder="" value={userDetails[1][1]} required />
                    </CFormGroup>
                </CCol>
                <CCol xs="8">
                <CFormGroup>
                    <CLabel htmlFor="name">Nombre</CLabel>
                    <CInput id="name" placeholder="" value={userDetails[2][1]} required />
                    </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="6">
                <CFormGroup>
                    <CLabel htmlFor="ccnumber">Email</CLabel>
                    <CInput id="ccnumber" placeholder="" value={userDetails[3][1]} required />
                    </CFormGroup>
                </CCol>
                <CCol xs="3">
                <CFormGroup>
                    <CLabel htmlFor="ccnumber">Teléfono 1</CLabel>
                    <CInput id="ccnumber" placeholder="" value={userDetails[4][1]} required />
                    </CFormGroup>
                </CCol>
                <CCol xs="3">
                <CFormGroup>
                    <CLabel htmlFor="ccnumber">Teléfono 2</CLabel>
                    <CInput id="ccnumber" placeholder="" value={userDetails[5][1]} required />
                    </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="ccmonth">Provincia</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option value="San José">San José</option>
                      <option value="Alajuela">Alajuela</option>
                      <option value="Puntarenas">Puntarenas</option>
                      <option value="...">...</option>
                    </CSelect>
                    </CFormGroup>
                </CCol>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="ccyear">Cantón</CLabel>
                    <CSelect custom name="ccyear" id="ccyear">
                      <option value="Desamparados">Desamparados</option>
                      <option value="San Sebastián">San Sebastián</option>
                      <option value="San Juan">San Juan</option>
                      <option value="...">...</option>
                    </CSelect>
                    </CFormGroup>
                </CCol>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="ccyear">Distrito</CLabel>
                    <CSelect custom name="ccyear" id="ccyear">
                      <option value="San Rafael Arriba">San Rafael Arriba</option>
                      <option value="San Rafael Abajoa">San Rafael Abajo</option>
                      <option value="Gravilias">Gravilias</option>
                      <option value="...">...</option>
                    </CSelect>
                    </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="cvv">Barrio</CLabel>
                    <CInput id="cvv" placeholder="" value={userDetails[9][1]} required/>
                    </CFormGroup>
                </CCol>
                <CCol xs="8">
                <CFormGroup>
                    <CLabel htmlFor="cvv">Dirección</CLabel>
                    <CInput id="cvv" placeholder="" value={userDetails[10][1]} required/>
                    </CFormGroup>
                </CCol>
              </CRow>
          </CCardBody>
          <CCardFooter>
              <CButton type="submit" color="info" disabled>Editar</CButton>
            </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ClientEdit
