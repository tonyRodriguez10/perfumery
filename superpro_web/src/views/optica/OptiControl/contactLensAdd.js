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

const ContactLensAdd = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
            <span style={{fontWeight:'bold', lineHeight:'35px', fontSize:'20px'}}>Registrar lente de cotacto</span>
              {/* <DocsLink name="-Input"/> */}
            </CCardHeader>
            <CCardBody>
              <CRow>
              <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccmonth">Cliente</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option value="San José">Ana Lucía</option>
                      <option value="Alajuela">Juan Pedro</option>
                      <option value="Puntarenas">Leticia</option>
                      <option value="...">...</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccmonth">Distribuidora</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option value="Glassify Dist">Glassify Dist</option>
                      <option value="Lenssa Dist SA">Lenssa Dist SA</option>
                      <option value="Central">Central</option>
                      <option value="...">...</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Número Factura</CLabel>
                    <CInput id="name" placeholder="" required />
                  </CFormGroup>
                </CCol>
                </CRow>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Nombre</CLabel>
                    <CInput id="name" placeholder="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Dirección</CLabel>
                    <CInput id="name" placeholder="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Teléfono</CLabel>
                    <CInput id="name" placeholder="" required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="name">Fecha del exámen</CLabel>
                    <CInput id="name" placeholder="" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="name">Fecha del retiro</CLabel>
                    <CInput id="name" placeholder="" required />
                    </CFormGroup>
                </CCol>
              </CRow>
              <hr></hr>
              <CRow>
                <CCol xs="1">
                <CFormGroup>
                    <CLabel htmlFor="name"> .</CLabel>
                    <CInput id="name" placeholder="OD" disabled />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    <CLabel htmlFor="name" style={{paddingLeft:'33%'}}>Poder</CLabel>
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    <CLabel htmlFor="name" style={{paddingLeft:'33%'}}>Curva</CLabel>
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    <CLabel htmlFor="name" style={{paddingLeft:'21%'}}>Diametro</CLabel>
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="1">
                <CFormGroup>
                    {/* <CLabel htmlFor="name"> .</CLabel> */}
                    <CInput id="name" placeholder="OI" disabled />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    {/* <CLabel htmlFor="name" style={{paddingLeft:'21%'}}>Esférico</CLabel> */}
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    {/* <CLabel htmlFor="name" style={{paddingLeft:'21%'}}>Cilindro</CLabel> */}
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    {/* <CLabel htmlFor="name" style={{paddingLeft:'33%'}}>EJE</CLabel> */}
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
              </CRow>
              <br></br>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Rx. Doctor</CLabel>
                    <CInput id="name" placeholder="" required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <hr></hr>
              <CRow>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="ccyear">Material</CLabel>
                    <CSelect custom name="ccyear" id="ccyear">
                      <option value="...">Vidrio</option>
                      <option value="...">Plastico</option>
                      <option value="...">Multifocal</option>
                      <option value="...">Pifocal Kriptok</option>
                      <option value="...">Bifocal Fat Top</option>
                      <option value="...">Super Blend</option>
                      <option value="...">Modular</option>
                      <option value="...">Lenticular</option>
                      <option value="...">Bifocal Excecutive</option>
                      <option value="...">Ninguno</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="ccyear">Color</CLabel>
                    <CSelect custom name="ccyear" id="ccyear">
                      <option value="...">Blanco</option>
                      <option value="...">Café A</option>
                      <option value="...">Rosado A</option>
                      <option value="...">Verde A</option>
                      <option value="...">Photogrey X</option>
                      <option value="...">Gris</option>
                      <option value="...">Ninguno</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="ccyear">Marca</CLabel>
                    <CSelect custom name="ccyear" id="ccyear">
                      <option value="...">...</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="ccyear">Uso</CLabel>
                    <CSelect custom name="ccyear" id="ccyear">
                      <option value="...">...</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CRow>
              <hr></hr>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Precio</CLabel>
                    <CInput id="name" placeholder="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Dep.</CLabel>
                    <CInput id="name" placeholder="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Saldo</CLabel>
                    <CInput id="name" placeholder="" required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CFormGroup row>
                <CCol md="9">
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="inline-checkbox5" name="inline-checkbox5" value="option3" disabled/>
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox5">Retirado</CLabel>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="info">Registrar</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ContactLensAdd
