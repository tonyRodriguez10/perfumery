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

import ArticlesData from './ArticlesData'

const ArticleEdit = ({match}) => {
  const article = ArticlesData.find( article => article.CodigoPrincipal.toString() === match.params.id)
  const articleDetails = article ? Object.entries(article) :
    [['CodigoPrincipal', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]
console.log(articleDetails);
  return (
    <CRow>
      <CCol xs="12" sm="12">
        <CCard>
          <CCardHeader>
          <span style={{fontWeight:'bold', lineHeight:'35px', fontSize:'20px'}}>Editar datos del artículo</span>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="name">Nombre del Artículo</CLabel>
                  <CInput id="name" placeholder="" value={articleDetails[2][1]} required />
                </CFormGroup>
              </CCol>
              <CCol xs="2">
                <CFormGroup>
                  <CLabel htmlFor="name">Código Principal</CLabel>
                  <CInput id="name" placeholder="" value={articleDetails[0][1]} required />
                </CFormGroup>
              </CCol>
              <CCol xs="2">
                <CFormGroup>
                  <CLabel htmlFor="name">Código Alterno</CLabel>
                  <CInput id="name" placeholder="" value={articleDetails[1][1]} required />
                </CFormGroup>
              </CCol>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="name">Descripción Adicional</CLabel>
                  <CInput id="name" placeholder="" value={articleDetails[3][1]} required />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
            <CCol xs="3">
                <CFormGroup>
                  <CLabel htmlFor="ccnumber">Costo(₡)</CLabel>
                  <CInput id="ccnumber" placeholder="" value={articleDetails[8][1]} required />
                </CFormGroup>
              </CCol>
              <CCol xs="3">
                <CFormGroup>
                  <CLabel htmlFor="ccnumber">Costo Promedio</CLabel>
                  <CInput id="ccnumber" placeholder="" value={articleDetails[7][1]} required />
                </CFormGroup>
              </CCol>
              <CCol xs="2">
                <CFormGroup>
                  <CLabel htmlFor="ccnumber">Desc. Máximo(%)</CLabel>
                  <CInput id="ccnumber" placeholder="" value={articleDetails[4][1]} required />
                </CFormGroup>
              </CCol>
              <CCol xs="2">
                <CFormGroup>
                  <CLabel htmlFor="ccnumber">Mínimo</CLabel>
                  <CInput id="ccnumber" placeholder="" value={articleDetails[5][1]} required />
                </CFormGroup>
              </CCol>
              <CCol xs="2">
                <CFormGroup>
                  <CLabel htmlFor="ccnumber">Máximo</CLabel>
                  <CInput id="ccnumber" placeholder="" value={articleDetails[6][1]} required />
                </CFormGroup>
              </CCol>
            </CRow>
            <CFormGroup row>
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
            </CFormGroup>
            <CRow>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="cvv">Utilidad #1(%)</CLabel>
                  <CInput id="cvv" placeholder="" value={articleDetails[9][1]} required/>
                </CFormGroup>
              </CCol>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="cvv">SubTotal #1</CLabel>
                  <CInput id="cvv" placeholder="" value={articleDetails[10][1]} required/>
                </CFormGroup>
              </CCol>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="cvv">Precio Venta #1</CLabel>
                  <CInput id="cvv" placeholder="" value={articleDetails[11][1]} required/>
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="cvv">Utilidad #2(%)</CLabel>
                  <CInput id="cvv" placeholder="" value={articleDetails[12][1]} required/>
                </CFormGroup>
              </CCol>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="cvv">SubTotal #2</CLabel>
                  <CInput id="cvv" placeholder="" value={articleDetails[13][1]} required/>
                </CFormGroup>
              </CCol>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="cvv">Precio Venta #2</CLabel>
                  <CInput id="cvv" placeholder="" value={articleDetails[14][1]} required/>
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="cvv">Utilidad #3(%)</CLabel>
                  <CInput id="cvv" placeholder="" value={articleDetails[15][1]} required/>
                </CFormGroup>
              </CCol>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="cvv">SubTotal #3</CLabel>
                  <CInput id="cvv" placeholder="" value={articleDetails[16][1]} required/>
                </CFormGroup>
              </CCol>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="cvv">Precio Venta #3</CLabel>
                  <CInput id="cvv" placeholder="" value={articleDetails[17][1]} required/>
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="3">
                <CFormGroup>
                  <CLabel htmlFor="ccmonth">Proveedor</CLabel>
                  <CSelect custom name="ccmonth" id="ccmonth">
                    <option value="San José">Prov 1</option>
                    <option value="Alajuela">Prov 2</option>
                    <option value="Puntarenas">Prov 3</option>
                    <option value="...">...</option>
                  </CSelect>
                </CFormGroup>
              </CCol>
              <CCol xs="3">
                <CFormGroup>
                  <CLabel htmlFor="ccyear">Linea</CLabel>
                  <CSelect custom name="ccyear" id="ccyear">
                    <option value="Desamparados">Linea 1</option>
                    <option value="San Sebastián">Linea 2</option>
                    <option value="San Juan">Linea 3</option>
                    <option value="...">...</option>
                  </CSelect>
                </CFormGroup>
              </CCol>
              <CCol xs="3">
                <CFormGroup>
                  <CLabel htmlFor="ccyear">Familia</CLabel>
                  <CSelect custom name="ccyear" id="ccyear">
                    <option value="San Rafael Arriba">Familia 1</option>
                    <option value="San Rafael Abajoa">Familia 2</option>
                    <option value="Gravilias">Familia 3</option>
                    <option value="...">...</option>
                  </CSelect>
                </CFormGroup>
              </CCol>
              <CCol xs="3">
                <CFormGroup>
                  <CLabel htmlFor="ccyear">Ubicación</CLabel>
                  <CSelect custom name="ccyear" id="ccyear">
                    <option value="San Rafael Arriba">Ubicación 1</option>
                    <option value="San Rafael Abajoa">Ubicación 2</option>
                    <option value="Gravilias">Ubicación 3</option>
                    <option value="...">...</option>
                  </CSelect>
                </CFormGroup>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
              <CButton type="submit" color="info">Editar</CButton>
            </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ArticleEdit
