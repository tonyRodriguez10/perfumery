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

const NormalLensAdd = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
            <span style={{fontWeight:'bold', lineHeight:'35px', fontSize:'20px'}}>Registrar lente normal</span>
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
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">D.P Lejos</CLabel>
                    <CInput id="name" placeholder="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">D.P. Cerca</CLabel>
                    <CInput id="name" placeholder="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Dimensión Seg</CLabel>
                    <CInput id="name" placeholder="" required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="1">
                <CFormGroup>
                    <CLabel htmlFor="name"> .</CLabel>
                    <CInput id="name" placeholder="OD" disabled />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    <CLabel htmlFor="name" style={{paddingLeft:'21%'}}>Esférico</CLabel>
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    <CLabel htmlFor="name" style={{paddingLeft:'21%'}}>Cilindro</CLabel>
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    <CLabel htmlFor="name" style={{paddingLeft:'33%'}}>EJE</CLabel>
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
              <CFormGroup row>
                  <CCol md="9">
                    <CLabel className="mr-2">Aros:</CLabel>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio1" name="inline-radios" value="option1" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Aro Nuevo</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio2" name="inline-radios" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Aro Propio</CLabel>
                    </CFormGroup>
                    {/* <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio3" name="inline-radios" value="option3" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio3">Three</CLabel>
                    </CFormGroup> */}
                  </CCol>
                </CFormGroup>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">ADD</CLabel>
                    <CInput id="name" placeholder="" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">CLAVE</CLabel>
                    <CInput id="name" placeholder="" required />
                  </CFormGroup>
                </CCol>
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
              {/* <CFormGroup row>
                <CCol md="9">
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="inline-checkbox1" name="inline-checkbox1" value="option1" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">Vigente</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Gravado (iva)</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Precio Unidades</CLabel>
                  </CFormGroup>
                </CCol>
              </CFormGroup> */}
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

export default NormalLensAdd
