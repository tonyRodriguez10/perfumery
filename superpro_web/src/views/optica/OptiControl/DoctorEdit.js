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

import DoctorsData from './DoctorsData'

const DoctorEdit = ({match}) => {
  const user = DoctorsData.find( user => user.nombre.toString() === match.params.id)
  const userDetails = user ? Object.entries(user) : 
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]
console.log(userDetails);
  return (
    <CRow>
      <CCol xs="12" sm="12">
        <CCard>
          <CCardHeader>
          <span style={{fontWeight:'bold', lineHeight:'35px', fontSize:'20px'}}>Editar datos del doctor</span>{/* {match.params.id} */}
          </CCardHeader>
          <CCardBody>
              <CRow>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="name">Nombre</CLabel>
                    <CInput id="name" placeholder="" value={userDetails[0][1]} required />
                    </CFormGroup>
                </CCol>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="name">Edad</CLabel>
                    <CInput id="name" placeholder="" value={userDetails[1][1]} required />
                    </CFormGroup>
                </CCol>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="name">Sexo</CLabel>
                    <CInput id="name" placeholder="" value={userDetails[2][1]} required />
                    </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="name">Teléfono</CLabel>
                    <CInput id="name" placeholder="" value={userDetails[3][1]} required />
                    </CFormGroup>
                </CCol>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="name">Dirección</CLabel>
                    <CInput id="name" placeholder="" value={userDetails[4][1]} required />
                    </CFormGroup>
                </CCol>
                {/* <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="name">Ocupación</CLabel>
                    <CInput id="name" placeholder="" value={userDetails[5][1]} required />
                    </CFormGroup>
                </CCol> */}
              </CRow>
          </CCardBody>
          <CCardFooter>
              <CButton type="submit" color="info">Editar</CButton>
            </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default DoctorEdit
