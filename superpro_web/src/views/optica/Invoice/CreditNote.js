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

const CreditNote = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
            <span style={{fontWeight:'bold', fontSize:'20px'}}>Notas de crédito</span>
              {/* <DocsLink name="-Input"/> */}
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="name">Fecha a buscar</CLabel>
                    <CInput id="name" placeholder="" value="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="ccyear">Cliente a buscar</CLabel>
                    <CSelect custom name="ccyear" id="ccyear">
                      <option value="San Rafael Arriba">Laura</option>
                      <option value="San Rafael Abajo">Diego</option>
                      <option value="Gravilias">Julia</option>
                      <option value="Gravilias">...</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="3" /* className="offset-md-3" */>
                  <CFormGroup>
                    <CLabel htmlFor="name" style={{visibility:"hidden"}}>Abrir</CLabel>
                    <CButton color="info" variant="outline"  block>Buscar</CButton>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="name">Número Factura</CLabel>
                    <CInput id="name" placeholder="" value="" required disabled/>
                  </CFormGroup>
                </CCol>
              </CRow>
              <hr></hr>
              <CRow>
                <CCol xl={6}>
                <span style={{fontWeight:'bold', fontSize:'16px'}}>Facturas del cliente</span>
                  <table className="table table-hover table-striped table-align-middle mb-0">
                    <thead>
                    <tr>
                      <th>Factura</th>
                      <th>Fecha</th>
                      <th>Cliente</th>
                      <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>
                        -
                      </td>
                      <td>
                        -
                      </td>
                      <td>
                        -
                      </td>
                      <td>
                        -
                      </td>
                    </tr>
                    <tr>
                      <td>
                        -
                      </td>
                      <td>
                        -
                      </td>
                      <td>
                        -
                      </td>
                      <td>
                        -
                      </td>
                    </tr>
                    <tr>
                      <td>
                        -
                      </td>
                      <td>
                        -
                      </td>
                      <td>
                        -
                      </td>
                      <td>
                        -
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </CCol>
                <CCol xl={6}>
                  <span style={{fontWeight:'bold', fontSize:'16px'}}>Datos de la nota</span>
                  <table className="table table-hover table-striped table-align-middle mb-0">
                    <thead>
                    <tr>
                      <th>Factura</th>
                      <th>Fecha</th>
                      <th>Cliente</th>
                      <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          -
                        </td>
                        <td>
                          -
                        </td>
                        <td>
                          -
                        </td>
                        <td>
                          -
                        </td>
                      </tr>
                      <tr>
                        <td>
                          -
                        </td>
                        <td>
                          -
                        </td>
                        <td>
                          -
                        </td>
                        <td>
                          -
                        </td>
                      </tr>
                      <tr>
                        <td>
                          -
                        </td>
                        <td>
                          -
                        </td>
                        <td>
                          -
                        </td>
                        <td>
                          -
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="3" className="offset-md-6">
                  <CFormGroup>
                    <CLabel htmlFor="name" style={{visibility:"hidden"}}>Reimprimir</CLabel>
                    <CButton color="info" variant="outline" block>Reimprimir</CButton>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="name" style={{visibility:"hidden"}}>Anular</CLabel>
                    <CButton color="info" block>Anular</CButton>
                  </CFormGroup>
                </CCol>
              </CRow>
              <hr></hr>
              <span style={{fontWeight:'bold', fontSize:'16px'}}>Devoluciones</span>
              <CRow>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="name">Nombre del producto</CLabel>
                    <CInput id="name" placeholder="" value="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="name">Cantidad</CLabel>
                    <CInput id="name" placeholder="" value="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="3" className="offset-md-3">
                  <CFormGroup>
                    <CLabel htmlFor="name"style={{visibility:"hidden"}}>Devolver</CLabel>
                    <CButton color="info" block>Devolver</CButton>
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

export default CreditNote
