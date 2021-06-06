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

const DiagnosticAdd = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
            <span style={{fontWeight:'bold', lineHeight:'35px', fontSize:'20px'}}>Registrar nuevo diagnóstico</span>
              {/* <DocsLink name="-Input"/> */}
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccmonth">Paciente</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option value="San José">Silvia</option>
                      <option value="Alajuela">Luis</option>
                      <option value="Puntarenas">Ana</option>
                      <option value="...">...</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="name">Teléfono</CLabel>
                    <CInput id="name" placeholder="" disabled required />
                    </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccmonth">Doctor</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option value="San José">Laura</option>
                      <option value="Alajuela">Camilo</option>
                      <option value="Puntarenas">Veronica</option>
                      <option value="...">...</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccmonth">Tipo de lente</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option value="San José">Monofocales</option>
                      <option value="Alajuela">Bifocales</option>
                      <option value="Puntarenas">Progresivos</option>
                      <option value="ocupacionales">Ocupacionales</option>
                      <option value="...">...</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccmonth">Estado de la receta</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option value="San José">Pendiente</option>
                      <option value="Alajuela">Concluido</option>
                      <option value="Puntarenas">Otro</option>
                      <option value="...">...</option>
                    </CSelect>
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
                    <CLabel htmlFor="name">Fecha del próximo exámen</CLabel>
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
                    <CLabel htmlFor="name" style={{paddingLeft:'40%'}}>SPH</CLabel>
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    <CLabel htmlFor="name" style={{paddingLeft:'40%'}}>CYL</CLabel>
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    <CLabel htmlFor="name" style={{paddingLeft:'40%'}}>EJE</CLabel>
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    <CLabel htmlFor="name" style={{paddingLeft:'43%'}}>DP</CLabel>
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    <CLabel htmlFor="name" style={{paddingLeft:'33%'}}>ADD</CLabel>
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    <CLabel htmlFor="name" style={{paddingLeft:'24%'}}>PRISMA</CLabel>
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    <CLabel htmlFor="name" style={{paddingLeft:'32%'}}>BASE</CLabel>
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
                    {/* <CLabel htmlFor="name">SPH</CLabel> */}
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    {/* <CLabel htmlFor="name">CYL</CLabel> */}
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    {/* <CLabel htmlFor="name">EJE</CLabel> */}
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    {/* <CLabel htmlFor="name">DP</CLabel> */}
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    {/* <CLabel htmlFor="name">ADD</CLabel> */}
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    {/* <CLabel htmlFor="name">PRISMA</CLabel> */}
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    {/* <CLabel htmlFor="name">BASE</CLabel> */}
                    <CInput id="name" placeholder="0" required />
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
                    <CLabel htmlFor="name" style={{paddingLeft:'40%'}}>SPH</CLabel>
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    <CLabel htmlFor="name" style={{paddingLeft:'40%'}}>CYL</CLabel>
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    <CLabel htmlFor="name" style={{paddingLeft:'40%'}}>EJE</CLabel>
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    <CLabel htmlFor="name" style={{paddingLeft:'43%'}}>DP</CLabel>
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                {/* <CCol xs="1">
                <CFormGroup>
                    <CLabel htmlFor="name" style={{paddingLeft:'33%'}}>ADD</CLabel>
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol> */}
                <CCol xs="1">
                <CFormGroup>
                    <CLabel htmlFor="name" style={{paddingLeft:'24%'}}>PRISMA</CLabel>
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    <CLabel htmlFor="name" style={{paddingLeft:'32%'}}>BASE</CLabel>
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
                    {/* <CLabel htmlFor="name">SPH</CLabel> */}
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    {/* <CLabel htmlFor="name">CYL</CLabel> */}
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    {/* <CLabel htmlFor="name">EJE</CLabel> */}
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    {/* <CLabel htmlFor="name">DP</CLabel> */}
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    {/* <CLabel htmlFor="name">ADD</CLabel> */}
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    {/* <CLabel htmlFor="name">PRISMA</CLabel> */}
                    <CInput id="name" placeholder="0" required />
                    </CFormGroup>
                </CCol>
              </CRow>
              <hr></hr>
              <CRow>
                <CCol xs="1">
                <CFormGroup>
                    <CLabel htmlFor="name">Altura OD</CLabel>
                    <CInput id="name" placeholder="" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="1">
                <CFormGroup>
                    <CLabel htmlFor="name">Altura OI</CLabel>
                    <CInput id="name" placeholder="" required />
                    </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="name">Diagnóstico</CLabel>
                    <CTextarea
                      name="textarea-input"
                      id="textarea-input"
                      rows="3"
                      placeholder="Observaciones..."
                    />
                  </CFormGroup>
                </CCol>
              </CRow>
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

export default DiagnosticAdd
