import React, { useState, useEffect } from 'react'
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
import * as Actions from '../../../redux/inventory/locations.actions';

const LocationAdd = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  const dispatch = useDispatch();
  const [cod, setCod] = useState('');
	const [name, setName] = useState('');

  function postLocation(){
		dispatch(Actions.postLocation({
      "codigo_Ubicacion": cod,
      "nombre_Ubicacion": name
    }));
	}

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
            <span style={{fontWeight:'bold', lineHeight:'35px', fontSize:'20px'}}>Registrar nueva ubicación</span>
              {/* <DocsLink name="-Input"/> */}
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Código</CLabel>
                    <CInput id="name" placeholder="" required onChange={(e) => setCod(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Ubicación</CLabel>
                    <CInput id="name" placeholder="" required onChange={(e) => setName(e.target.value)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="info" onClick={() => postLocation()} disabled>Registrar</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default LocationAdd
