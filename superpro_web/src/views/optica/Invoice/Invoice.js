import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
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
  CSwitch,
  CDataTable,
  CPagination,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

import InvoiceData from './InvoiceData'
import { useSelector } from 'react-redux'

const Invoice = () => {
  const clientsList = useSelector(state => state.clients.clientsList);
  const articlesList = useSelector(state => state.articles.articlesList);

  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')

  const [codigoArt, setCodigoArt] = useState('')
  const [nombreArt, setNombreArt] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [monto, setMonto] = useState('')
  const [descuento, setDescuento] = useState('')
  const [gravado, setGravado] = React.useState(false);


  const [finalizaModal, setFinalizaModal] = useState(false);
  const [finalizaModal2, setFinalizaModal2] = useState(false);
  const [finalizaModal3, setFinalizaModal3] = useState(false)

  function postClient(cod,nom,ema){
    setCodigo(cod);
    setNombre(nom);
    setEmail(ema);
    setFinalizaModal2(!finalizaModal2);
	}

  function cargarArticulo(cod,nom,cnt,mnt,dsc,grv){
    setCodigoArt(cod);
    setNombreArt(nom);
    setCantidad(cnt);
    setMonto(mnt);
    setDescuento(dsc);
    setGravado(grv);
    setFinalizaModal3(!finalizaModal3);
	}
  
//   const [articlesList_formated,updateList] = useState([]);
//   function insertar(cod,nom,cnt,mnt,dsc){
//     const formatedObj = {
//            'codigo': cod,
//            'nombre':nom,
//            'cantidad':cnt,
//            'total':'2',
//            'descuento':dsc,
//            'monto':mnt   
//     }
  
//   updateList(formatedObj);
// }
// console.log(articlesList_formated)
  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
            <span style={{fontWeight:'bold', lineHeight:'35px', fontSize:'20px'}}>Registrar factura</span>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                  <CLabel htmlFor="name">Código de cliente</CLabel>
                  <div className="d-flex">
                    <CInput id="name" style={{width:'95%'}} value={codigo}  required />
                    <CButton type="submit" size="sm" color="info" onClick={() => setFinalizaModal2(!finalizaModal2)}> + </CButton>
                  </div>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Nombre de cliente</CLabel>
                    <CInput id="name" value={nombre} required />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Correo de cliente</CLabel>
                    <CInput id="name" value={email} required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Código de artículo/servicio</CLabel>
                    <div className="d-flex">
                    <CInput id="name" style={{width:'95%'}} value={codigoArt}  required />
                    <CButton type="submit" size="sm" color="info" onClick={() => setFinalizaModal3(!finalizaModal3)}> + </CButton>
                  </div>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="name">Nombre de artículo/servicio</CLabel>
                    <CInput id="name" value={nombreArt}  required />
                  </CFormGroup>
                </CCol>
                <CCol xs="1">
                  <CFormGroup>
                    <CLabel htmlFor="name">Cantidad</CLabel>
                    <CInput id="name" value={cantidad}  required />
                  </CFormGroup>
                </CCol>
                <CCol xs="1">
                  <CFormGroup>
                    <CLabel htmlFor="name">Monto(₡)</CLabel>
                    <CInput id="name" value={monto}  required />
                  </CFormGroup>
                </CCol>
                <CCol xs="1">
                  <CFormGroup>
                    <CLabel htmlFor="name">Descuento</CLabel>
                    <CInput id="name" value={descuento}  required />
                  </CFormGroup>
                </CCol>
                <CCol md="1">
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="inline-checkbox5" checked={gravado} name="inline-checkbox5" value="option3"/>
                    <CLabel variant="custom-checkbox"  htmlFor="inline-checkbox5">Gravado</CLabel>
                  </CFormGroup>
                </CCol>
                <CCol md="1">
                  <CFormGroup variant="custom-checkbox" inline>
                   {/* <CButton type="submit" size="sm" color="info" onClick={() => insertar(codigoArt,nombreArt,cantidad,monto,descuento)}> Insertar </CButton> */}
                  </CFormGroup>
                </CCol>
              </CRow>
              <hr></hr>
              <br></br><span style={{fontWeight:'bold', fontSize:'16px'}}>Líneas de detalle</span>
              {/* <h6>Lineas de detalle</h6> */}
              <table id="registry_articles" className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Código </th>
                <th scope="col">Descripcion</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Unidades</th>
                <th scope="col">P.Unitario</th>
                <th scope="col">P.Unidades</th>
                <th scope="col">Desc</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {/* {articlesList_formated.map(item => (
                <tr key={item.codigo}>
                   <td>{item.codigo}</td>
                  <td>{item.nombre}</td>
                  <td>{item.cantidad}</td>
                  <td>{item.descuento}</td>
                </tr>
              ))} */}
            </tbody>
          </table>
             
              <br></br>
              <hr></hr>
              <CFormGroup row>
                <CCol md="9">
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Contado</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Apartado</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="inline-checkbox4" name="inline-checkbox4" value="option2" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox4">Crédito</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="inline-checkbox1" name="inline-checkbox1" value="option3" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">Proforma</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="inline-checkbox6" name="inline-checkbox6" value="option3" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox6">Salida de inventario</CLabel>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <hr></hr>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="2" className="offset-md-8">
                    <CLabel htmlFor="text-input">Sub-Total</CLabel>
                  </CCol>
                  <CCol md="2">
                    <CInput id="text-input" name="text-input" placeholder="₡" disabled/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2" className="offset-md-8">
                    <CLabel htmlFor="text-input">Descuento General</CLabel>
                  </CCol>
                  <CCol md="2">
                    <CInput id="text-input" name="text-input" placeholder="₡" disabled/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2" className="offset-md-8">
                    <CLabel htmlFor="text-input">Descuento Línea</CLabel>
                  </CCol>
                  <CCol md="2">
                    <CInput id="text-input" name="text-input" placeholder="₡" disabled/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2" className="offset-md-8">
                    <CLabel htmlFor="text-input">Sub-Total</CLabel>
                  </CCol>
                  <CCol md="2">
                    <CInput id="text-input" name="text-input" placeholder="₡" disabled/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2" className="offset-md-8">
                    <CLabel htmlFor="text-input">Impuesto de venta</CLabel>
                  </CCol>
                  <CCol md="2">
                    <CInput id="text-input" name="text-input" placeholder="₡" disabled/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2" className="offset-md-8">
                    <CLabel htmlFor="text-input">Total</CLabel>
                  </CCol>
                  <CCol md="2">
                    <CInput id="text-input" name="text-input" placeholder="₡" disabled/>
                  </CCol>
                </CFormGroup>
              </CForm>

              {/* Modals Section */}
              <CModal
                show={finalizaModal}
                onClose={() => setFinalizaModal(!finalizaModal)}
                color="info"
              >
              <CModalHeader closeButton>
                <CModalTitle>Finalizar factura</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <CFormGroup row>
                    <CCol md="6">
                      <CLabel htmlFor="text-input">Total</CLabel>
                    </CCol>
                    <CCol md="6">
                      <CInput id="text-input" name="text-input" placeholder="₡" disabled/>
                    </CCol>
                  </CFormGroup>
                  <hr></hr>
                  <CFormGroup row>
                    <CCol md="6">
                      {/* <CLabel htmlFor="text-input">Pago con</CLabel> */}
                      <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="inline-checkbox7" name="inline-checkbox7" value="option3"/>
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox7">Pago Con</CLabel>
                  </CFormGroup>
                    </CCol>
                    <CCol md="6">
                      <CInput id="text-input" name="text-input" placeholder="₡" disabled/>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="6">
                      <CLabel htmlFor="text-input">Cambio</CLabel>
                    </CCol>
                    <CCol md="6">
                      <CInput id="text-input" name="text-input" placeholder="₡" disabled/>
                    </CCol>
                  </CFormGroup>
                  <hr></hr>
                  <CFormGroup row>
                    <CCol md="6">
                      <CLabel htmlFor="text-input"># Tarjeta</CLabel>
                    </CCol>
                    <CCol md="6">
                      <CInput id="text-input" name="text-input" placeholder="₡" disabled/>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="6">
                      <CLabel htmlFor="text-input"># Autorización</CLabel>
                    </CCol>
                    <CCol md="6">
                      <CInput id="text-input" name="text-input" placeholder="₡" disabled/>
                    </CCol>
                  </CFormGroup>
                </CForm>
              </CModalBody>
              <CModalFooter>
                <CButton color="info" variant="outline"onClick={() => setFinalizaModal(!finalizaModal)}>Cancelar</CButton>
                <CButton color="info" onClick={() => setFinalizaModal(!finalizaModal)}>Finalizar</CButton>{' '}
              </CModalFooter>
            </CModal>
            <CModal
                show={finalizaModal2}
                onClose={() => setFinalizaModal2(!finalizaModal2)}
                color="info"
              >
              <CModalHeader closeButton>
                <CModalTitle>Seleccionar un cliente</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <table id="registry_clients" className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Código</th>
                <th scope="col">Nombre</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody>
              {clientsList.map(item => (
                <tr key={item.cod_Cliente}>
                   <td>{item.cod_Cliente}</td>
                  <td>{item.nom_Cliente}</td>
                  <td><CButton type="submit" color="info" variant="outline"  onClick={() => postClient(item.cod_Cliente,item.nom_Cliente,item.cedula)}>Seleccionar</CButton></td>
                </tr>
              ))}
            </tbody>
          </table>
              </CModalBody>
              <CModalFooter>
                <CButton color="info" variant="outline"onClick={() => setFinalizaModal2(!finalizaModal2)}>Cancelar</CButton>
                <CButton color="info" onClick={() => setFinalizaModal2(!finalizaModal2)}>Finalizar</CButton>{' '}
              </CModalFooter>
            </CModal>
          
            <CModal
                show={finalizaModal3}
                onClose={() => setFinalizaModal3(!finalizaModal3)}
                color="info"
              >
              <CModalHeader closeButton>
                <CModalTitle>Seleccionar un articulo</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <table id="registry_articles" className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Código </th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio Venta</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody>
              {articlesList.map(item => (
                <tr key={item.codigo}>
                   <td>{item.codigo}</td>
                  <td>{item.nombre}</td>
                  <td>{item.prec_Venta1}</td>
                  <td>{item.cantidad_Unidades}</td>
                  <td><CButton type="submit" color="info" variant="outline"  onClick={() => cargarArticulo(item.codigo,item.nombre,item.cantidad_Unidades,item.prec_Venta1,item.descuento_Maximo,item.gravado)}>Seleccionar</CButton></td>
                </tr>
              ))}
            </tbody>
          </table>
              </CModalBody>
              <CModalFooter>
                <CButton color="info" variant="outline"onClick={() => setFinalizaModal3(!finalizaModal3)}>Cancelar</CButton>
                <CButton color="info" onClick={() => setFinalizaModal3(!finalizaModal3)}>Finalizar</CButton>{' '}
              </CModalFooter>
            </CModal>



            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="info" onClick={() => setFinalizaModal(!finalizaModal)}>Facturar</CButton>(Dar click!)
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Invoice
