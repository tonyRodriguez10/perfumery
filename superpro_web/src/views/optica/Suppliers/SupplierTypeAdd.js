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
import { useDispatch } from 'react-redux';
import * as Actions from '../../../redux/suppliers/suppliers.actions';

const SupplierTypeAdd = () => {
  const dispatch = useDispatch();
  const [cod, setCod] = useState('');
  const [tipo, setTipo] = useState('');

  function postSupplierType(){
		dispatch(Actions.postSupplierType({
      "codigo_Tipo": cod,
      "nombre_Tipo": tipo
    }));
	}

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
            <span style={{fontWeight:'bold', lineHeight:'35px', fontSize:'20px'}}>Registrar nuevo tipo de proveedor</span>
              {/* <DocsLink name="-Input"/> */}
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="cod">Código</CLabel>
                    <CInput id="cod" placeholder="" required onChange={(e) => setCod(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="tipo">Tipo</CLabel>
                    <CInput id="tipo" placeholder="" required onChange={(e) => setTipo(e.target.value)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="info" onClick={() => postSupplierType()} disabled>Registrar</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default SupplierTypeAdd
