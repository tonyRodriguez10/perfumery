import React, { useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import * as Actions from '../../../redux/inventory/articles.actions'

const ArticleAdd = () => {
  const suppliersList = useSelector(state => state.suppliers.suppliersList);
  const linesList = useSelector(state => state.lines.linesList);
  //const articles= articlesList[0]["nombre"];
  // const [articlesList_formated,updateList] = useState([]);
  //  useEffect(() => {//builds a list of objects with new key names
  //   const formatedList = articlesList.map( article => {
  //     let formatedObj = {
  //       Nombre: article.nombre,
  //     }
  //     return formatedObj;
  //   });
  //   updateList(formatedList);
  // }, articlesList)
  // //console.log(articlesList_formated);

  const [checkedVigente, setCheckedVigente] = React.useState(false);
  const handleChangeVigente = event => {
    if(checkedVigente===false)
    {
      setCheckedVigente(!checkedVigente);
    }
    else{
      setCheckedVigente(!checkedVigente);
    }
 }
 const [checkedGravado, setCheckeGravado] = React.useState(false);
  const handleChangeGravado = event => {
    if(checkedGravado===false)
    {
      setCheckeGravado(!checkedGravado);
    }
    else{
      setCheckeGravado(!checkedGravado);
    }
 }
 const [checkedPrecioUnidad, setCheckePrecioUnidad] = React.useState(false);
  const handleChangePrecioUnidad = event => {
    if(checkedPrecioUnidad===false)
    {
      setCheckePrecioUnidad(!checkedPrecioUnidad);
    }
    else{
      setCheckePrecioUnidad(!checkedPrecioUnidad);
    }
 }
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  const dispatch = useDispatch();
  //constantes para capturar el nombre de los inputs y funcion para alterar su estado en caso de
  const [articleName, setArticleName] = useState('');
  const [mainCode, setMainCode] = useState('');
  const [secondaryCode, setSecondaryCode] = useState('');
  const [description, setDescription] = useState('');
  const [unitQuantity, setUnitQuantity] = useState('');
  const [cost, setCost] = useState('');
  const [averageCost, setAverageCost] = useState('');
  const [maxDiscount, setMaxDiscount] = useState('');
  const [minStock, setMinStock] = useState('');
  const [maxStock, setMaxStock] = useState('');
  const [taxed, setTaxed] = useState('');
  const [utility1, setUtility1] = useState('');
  const [utility2, setUtility2] = useState('');
  const [utility3, setUtility3] = useState('');
  const [subtotal1, setSubtotal1] = useState('');
  const [subtotal2, setSubtotal2] = useState('');
  const [subtotal3, setSubtotal3] = useState('');
  const [precioVenta1, setPrecioVenta1] = useState('');
  const [precioVenta2, setPrecioVenta2] = useState('');
  const [precioVenta3, setPrecioVenta3] = useState('');
  const [proveedor, setProveedor] = useState('');
  const [linea, setLinea] = useState('');
  const [familia, setFamilia] = useState('');
  const [ubicacion, setUbicacion] = useState('');


  //funcion para enviar los parametros al backend
  function postArticle(){
		dispatch(Actions.postArticle({
      "nombre": articleName,
      "costo": cost,
      "cantidad_Unidades": unitQuantity,
      "codigo":mainCode,
      "alterno":secondaryCode,
      "descripcion":description,
      "cost_Promedio":averageCost,
      "descuento_Maximo":maxDiscount,
      "min_Stock": minStock,
      "max_Stock":maxStock,
      "vigente": checkedVigente,
      "gravado": checkedGravado,
      "utilidad1": utility1,
      "utilidad2": utility2,
      "utilidad3": utility3,
      "subtotal1":subtotal1,
      "subtotal2":subtotal2,
      "subtotal3":subtotal3,
      "prec_Venta1":precioVenta1,
      "prec_Venta2":precioVenta2,
      "prec_Venta3":precioVenta3,
      "proveedor":proveedor,
      "linea":linea,
      "familia":familia,
      "ubicacion":ubicacion,
      "unidades":checkedPrecioUnidad,
    }));
	}

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
            <span style={{fontWeight:'bold', lineHeight:'35px', fontSize:'20px'}}>Registrar nuevo artículo</span>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="articleName">Nombre del Artículo</CLabel>
                    <CInput id="articleName" required onChange={(e) => setArticleName(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="mainCode">Código Principal</CLabel>
                    <CInput id="mainCode"  required onChange={(e) => setMainCode(e.target.value)} />
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="secondaryCode">Código Alterno</CLabel>
                    <CInput id="secondaryCode" required onChange={(e) => setSecondaryCode(e.target.value)} />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="description">Descripción Adicional</CLabel>
                    <CInput id="description" required onChange={(e) => setDescription(e.target.value)} />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
              <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cost">Costo(₡)</CLabel>
                    <CInput id="cost" required onChange={(e) => setCost(e.target.value)} />
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="averageCost">Costo Promedio</CLabel>
                    <CInput id="averageCost" required onChange={(e) => setAverageCost(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="maxDiscount">Desc. Máximo(%)</CLabel>
                    <CInput id="maxDiscount" required onChange={(e) => setMaxDiscount(e.target.value)} />
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="minStock">Mínimo</CLabel>
                    <CInput id="minStock" required onChange={(e) => setMinStock(e.target.value)} />
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="maxStock">Máximo</CLabel>
                    <CInput id="maxStock" required onChange={(e) => setMaxStock(e.target.value)} />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CFormGroup row>
                <CCol md="9">
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="current" name="current"  checked={ checkedVigente } onChange={ handleChangeVigente } />
                    <CLabel variant="custom-checkbox" htmlFor="current">Vigente</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="taxed" name="taxed"  checked={ checkedGravado } onChange={ handleChangeGravado } />
                    <CLabel variant="custom-checkbox" htmlFor="taxed">Gravado (iva)</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="unitPrice" name="unitPrice" checked={ checkedPrecioUnidad } onChange={ handleChangePrecioUnidad } />
                    <CLabel variant="custom-checkbox" htmlFor="unitPrice">Precio Unidades</CLabel>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="utility1">Utilidad #1(%)</CLabel>
                    <CInput id="utility1" required onChange={(e) => setUtility1(e.target.value)} />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="subtotal1">SubTotal #1</CLabel>
                    <CInput id="subtotal1" required onChange={(e) => setSubtotal1(e.target.value)} />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="precioVenta1">Precio Venta #1</CLabel>
                    <CInput id="precioVenta1" required onChange={(e) => setPrecioVenta1(e.target.value)} />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="utility2">Utilidad #2(%)</CLabel>
                    <CInput id="utility2" required onChange={(e) => setUtility2(e.target.value)} />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="subtotal2">SubTotal #2</CLabel>
                    <CInput id="subtotal2" required onChange={(e) => setSubtotal2(e.target.value)} />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="precioVenta2">Precio Venta #2</CLabel>
                    <CInput id="precioVenta2" required onChange={(e) => setPrecioVenta2(e.target.value)} />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="utility3">Utilidad #3(%)</CLabel>
                    <CInput id="utility3" required onChange={(e) => setUtility3(e.target.value)} />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="subtotal3">SubTotal #3</CLabel>
                    <CInput id="subtotal3" required onChange={(e) => setSubtotal3(e.target.value)} />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="precioVenta3">Precio Venta #3</CLabel>
                    <CInput id="precioVenta3" required onChange={(e) => setPrecioVenta3(e.target.value)} />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="proveedor">Proveedor</CLabel>
                    <CSelect custom name="proveedor" id="proveedor" required onChange={(e) => setProveedor(e.target.value)}>
                      {suppliersList.map((obj,index ) => <option key={index} value={obj.codigo}>{obj.nombre}</option>)}
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="linea">Linea</CLabel>
                    <CSelect custom name="linea" id="linea" required onChange={(e) => setLinea(e.target.value)}>
                    {linesList.map((obj,index ) => <option key={index} value={obj.codigo_Linea}>{obj.nombre_Linea}</option>)}
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="familia">Familia</CLabel>
                    <CSelect custom name="familia" id="familia" required onChange={(e) => setFamilia(e.target.value)}>
                      <option value="San Rafael Arriba">Familia 1</option>
                      <option value="San Rafael Abajoa">Familia 2</option>
                      <option value="Gravilias">Familia 3</option>
                      <option value="...">...</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="ubicacion">Ubicación</CLabel>
                    <CSelect custom name="ubicacion" id="ubicacion" required onChange={(e) => setUbicacion(e.target.value)}>
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
              <CButton type="submit" size="sm" color="info" onClick={() => postArticle()} disabled>Registrar</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ArticleAdd
