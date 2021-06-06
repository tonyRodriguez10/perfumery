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

const Box = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
            <span style={{fontWeight:'bold', fontSize:'20px'}}>Apertura y cierre de caja</span>
              {/* <DocsLink name="-Input"/> */}
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="name">Fecha de apertura</CLabel>
                    <CInput id="name" placeholder="" value="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="name">Monto inicial</CLabel>
                    <CInput id="name" placeholder="" value="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="3" className="offset-md-3">
                  <CFormGroup>
                    <CLabel htmlFor="name" variant="outline" style={{visibility:"hidden"}}>Abrir</CLabel>
                    <CButton color="info" block>Abrir caja</CButton>
                  </CFormGroup>
                </CCol>
              </CRow>
              <hr></hr>
              <table className="table table-hover table-striped table-align-middle mb-0">
                <thead>
                <tr>
                  <th>Categorías</th>
                  <th>Contado</th>
                  <th>Crédito</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    Abonos a apartados
                  </td>
                  <td>
                    0.00
                  </td>
                  <td>
                  0.00
                  </td>
                </tr>
                <tr>
                  <td>
                    Abonos a CxC
                  </td>
                  <td>
                    0.00
                  </td>
                  <td>
                  0.00
                  </td>
                </tr>
                <tr>
                  <td>
                    Ventas exentas
                  </td>
                  <td>
                    0.00
                  </td>
                  <td>
                  0.00
                  </td>
                </tr>
                <tr>
                  <td>
                    Ventas gravadas
                  </td>
                  <td>
                    0.00
                  </td>
                  <td>
                  0.00
                  </td>
                </tr>
                <tr>
                  <td>
                    Impuestos
                  </td>
                  <td>
                    0.00
                  </td>
                  <td>
                  0.00
                  </td>
                </tr>
                <tr>
                  <td>
                    Sub-Total
                  </td>
                  <td>
                    0.00
                  </td>
                  <td>
                  0.00
                  </td>
                </tr>
                <tr>
                  <td>
                   Efectivo inicial
                  </td>
                  <td>
                    0.00
                  </td>
                  <td>
                  0.00
                  </td>
                </tr>
                <tr>
                  <td>
                    Gastos
                  </td>
                  <td>
                    0.00
                  </td>
                  <td>
                  0.00
                  </td>
                </tr>
                <tr>
                  <td>
                    Total
                  </td>
                  <td>
                    0.00
                  </td>
                  <td>
                  0.00
                  </td>
                </tr>
                </tbody>
              </table>
              <hr></hr>
              <CRow>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="name">Fecha de cierre</CLabel>
                    <CInput id="name" placeholder="" value="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="3" className="offset-md-6">
                  <CFormGroup>
                    <CLabel htmlFor="name" variant="outline" style={{visibility:"hidden"}}>Cerrar</CLabel>
                    <CButton color="info" block>Cerra caja</CButton>
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCardBody>
            {/* <CCardFooter>
              <CButton type="submit" size="sm" color="info">Guardar</CButton>
            </CCardFooter> */}
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Box
