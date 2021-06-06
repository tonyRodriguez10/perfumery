import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Login = () => {
  return (
    <div /* style={{background:'#cce6ff'}} */ className="c-app c-default-layout flex-row align-items-center loginBackground">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4" style={{background:'#000000'}}>
                
                  <CImg style={{width:'400px',height: '50%', margin: '18% 0% 0% 0%'}}
                    src="pics/perfumaniaLogo.jpg"
                    /* src="https://picsum.photos/1024/480/?image=54" */
                    block
                    class="mb-2"
                  />
                  
               
              </CCard>
              <CCard className="text-white  py-5 d-md-down-none" style={{ width: '44%', background:'#c71828'}}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Inicio de Sesión</h2>
                    <CForm>
                    <h1>Ingreso</h1>
                    <p className="text-black">Ingrese a su cuenta</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput  type="text" placeholder="Usuario" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Contraseña" autoComplete="current-password" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="12">
                        <Link to="/dashboard">
                          <CButton color="btn btn-pill btn-dark" className="float-center">Ingresar</CButton>
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
