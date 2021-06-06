import React from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupAppend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Page404 = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6">
            <div className="clearfix">
              <h1 className="float-left display-3 mr-4" style={{color:'white'}}>404</h1>
              <h4 className="pt-3" style={{color:'white'}}>Diseño en construcción.</h4>
              <button type="button" class="btn btn-pill btn-success text-muted float-left"><a href="/#/dashboard" style={{color:'white'}}>Vuelve más adelante.</a></button>
            </div>
            
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page404
