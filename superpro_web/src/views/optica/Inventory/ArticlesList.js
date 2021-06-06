import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './../../../redux/inventory/articles.actions'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const ArticlesList = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const articlesList = useSelector(state => state.articles.articlesList);
  console.log(articlesList)
  useEffect(() => {
    dispatch(Actions.getArticles());
  }, [])

   /* tabla */
   const [articlesList_formated,updateList] = useState([]);
   useEffect(() => {//builds a list of objects with new key names
    const formatedList = articlesList.map( article => {
      let formatedObj = {
        Código: article.codigo,
        Nombre: article.nombre,
        'Precio Venta': article.prec_Venta1,
        Cantidad: article.cantidad,
      }
      return formatedObj;
    });
    updateList(formatedList);
  }, articlesList)

   const [details, setDetails] = useState([])
   const toggleDetails = (index) => {
     const position = details.indexOf(index)
     let newDetails = details.slice()
     if (position !== -1) {
       newDetails.splice(position, 1)
     } else {
       newDetails = [...details, index]
     }
     setDetails(newDetails)
   }
 
 
   const fields = [
     { key: 'Código', _style: { width: '10%'} },
     { key: 'Nombre', _style: { width: '10%'} },
     { key: 'Precio Venta', _style: { width: '20%'} },
     { key: 'Cantidad', _style: { width: '10%'} },
     {
       key: 'show_details',
       label: 'Acciones',
       _style: { width: '5%' },
       sorter: false,
       filter: false
     }
   ]

  
  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            <div className="card-exportBTN--inventory">
            <h1 style={{fontWeight:'bold', lineHeight:'35px', fontSize:'45px',textAlign:'center',textDecoration:'underline'}}>Artículos Registrados</h1>
              <ReactHTMLTableToExcel 
                id="btn test"
                className="btn btn-success"
                table="registry_articles"
                filename="Articulos registrados"
                sheet="pagina 1"
                buttonText={ <img src="pics/SuperProExcel.png" width="25" height="25" /> }
              />
              {/* <CButton className="btn_excel--inventory" style={{marginLeft:'2%'}} type="submit" color="btn btn-danger" onClick={() => {
                history.push('/articulos-registro')
              }}>Exportar a PDF</CButton> */}
            </div>
            
          </CCardHeader>
          <CCardBody>
          <CDataTable
                // addTableClasses="id='registry_clients'"
                // id="disabledInput"
                items={articlesList_formated}
                fields={fields}
                tableFilter={{ placeholder: 'Buscar artículo...', label: 'Consultar:' }}
                itemsPerPageSelect = {{ label: 'Items por página:',  values: [5, 10, 20, 50] }}
                itemsPerPage={5}
                border
                header
                hover
                sorter
                pagination
                scopedSlots = {{
                  'show_details':
                    (item, index)=>{
                      return (
                        <td className="py-2">
                            <CButton  shape="rounded-pill" style={{width:'100%'}} color="info"  onClick={() => {history.push(`/articulo/${index}`)}} disabled>Editar</CButton>
                            <CButton  shape="rounded-pill" style={{width:'100%'}} color="danger"  onClick={() => {history.push(`/clientes-registro/${index}`) }} disabled>Eliminar</CButton>
                        </td>
                        )
                    },
                }}
              />
              <hr />
          {/* <table id="registry_articles" className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Código </th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio Venta</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {articlesList.map(item => (
                <tr key={item.codigo}>
                   <td>{item.codigo}</td>
                  <td>{item.nombre}</td>
                  <td>{item.prec_Venta1}</td>
                  <td>{item.cantidad_Unidades}</td>
                  <td><CButton style={{marginRight:'5%'}} type="submit" color="info" variant="outline" onClick={() => {
                history.push(`/cliente/${item.codigo}`)
              }}>Editar</CButton>
              <CButton type="submit" color="danger" variant="outline" onClick={() => {
                history.push(`/clientes-registro/${item.codigo}`)
              }}>Eliminar</CButton></td>
                </tr>
              ))}
            </tbody>
          </table> */}
          <CButton className="btn_registry--inventory" type="submit" color="btn btn-info" variant="outline" onClick={() => {
                history.push('/articulos-registro')
              }}>Registrar artículo</CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ArticlesList
