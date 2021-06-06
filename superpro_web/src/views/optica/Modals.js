import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const ModalsOpt = () => {

  const [modal, setModal] = useState(true)
  const [large, setLarge] = useState(false)
  const [small, setSmall] = useState(false)
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const [danger, setDanger] = useState(false)
  const [info, setInfo] = useState(false)

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            Ventanas emergentes para mensajes de confirmación u operaciones específicas
            {/* <DocsLink name="CModal"/> */}
          </CCardHeader>
          <CCardBody>
            <CButton onClick={() => setModal(!modal)} className="mr-1">Ver tamaño estándar</CButton>
            <CButton onClick={() => setLarge(!large)} className="mr-1">Ver ventana grande</CButton>
            <CButton onClick={() => setSmall(!large)} className="mr-1">Ver ventaña pequeña</CButton>
            <CModal
              show={modal}
              onClose={setModal}
            >
              <CModalHeader closeButton>
                <CModalTitle>Tamaño normal</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </CModalBody>
              <CModalFooter>
                <CButton color="primary">Aceptar</CButton>{' '}
                <CButton 
                  color="secondary" 
                  onClick={() => setModal(false)}
                >Cancelar</CButton>
              </CModalFooter>
            </CModal>


            <CModal 
              show={large} 
              onClose={() => setLarge(!large)}
              size="lg"
            >
              <CModalHeader closeButton>
                <CModalTitle>Tamaño grande</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </CModalBody>
              <CModalFooter>
                <CButton color="primary" onClick={() => setLarge(!large)}>Aceptar</CButton>{' '}
                <CButton color="secondary" onClick={() => setLarge(!large)}>Cancelar</CButton>
              </CModalFooter>
            </CModal>

            <CModal 
              show={small} 
              onClose={() => setSmall(!small)}
              size="sm"
            >
              <CModalHeader closeButton>
                <CModalTitle>Tamaño pequeño</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </CModalBody>
              <CModalFooter>
                <CButton color="primary" onClick={() => setSmall(!small)}>Aceptar</CButton>{' '}
                <CButton color="secondary" onClick={() => setSmall(!small)}>Cancelar</CButton>
              </CModalFooter>
            </CModal>

            <hr />

            <CButton color="info" onClick={() => setInfo(!info)} className="mr-1">Abrir ventana</CButton>

            <CModal
              show={info}
              onClose={() => setInfo(!info)}
              color="info"
            >
              <CModalHeader closeButton>
                <CModalTitle>Ejemplo de ventana emergete</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </CModalBody>
              <CModalFooter>
                <CButton color="secondary" onClick={() => setInfo(!info)}>Cancelar</CButton>
                <CButton color="info" onClick={() => setInfo(!info)}>Aceptar</CButton>{' '}
              </CModalFooter>
            </CModal>

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ModalsOpt
