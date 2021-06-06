import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CCollapse,
  CDataTable,
  CPagination,
  CRow,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './../../../redux/clients/clients.actions';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

/* Formato para que la libreria del Excel elimine la ultima columna que seria la de las acciones. APLICA PARA TODOS LOS COMPONENTES*/
ReactHTMLTableToExcel.format = (s, c) => {
  if (c && c['table']) {
    const html = c.table;
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const rows = doc.querySelectorAll('tr');

    for (const row of rows) row.removeChild(row.lastChild);/* justo acá */

    c.table = doc.querySelector('table').outerHTML;
  }

  return s.replace(/{(\w+)}/g, (m, p) => c[p]);
};

const ClientsList = () => {
  const history = useHistory()//can be used for moving to another page by a click for example, or consulting the previous page
  const dispatch = useDispatch();//communicates react with redux
  const clientsList = useSelector(state => state.clients.clientsList);//selects part of the state that redux handles
  useEffect(() => {
    dispatch(Actions.getClients());//react 'says: redux please recive this order(action) and do your magic'
  }, [])//empty array indicates the effect to execute only one time

  /* tabla */
  const [clientsList_formated,updateList] = useState([]);
  useEffect(() => {//builds a list of objects with new key names
    const formatedList = clientsList.map( client => {
      let formatedObj = {
        cédula: client.cedula,
        nombre: client.nom_Cliente,
        email: client.email,
        teléfono: client.telefono,
        celular: client.celular,
        dirección: client.direccion,
      }
      return formatedObj;
    });
    updateList(formatedList);
  }, clientsList)
  
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
    { key: 'cod_Cliente', _style: { width: '10%'} },
    { key: 'cedula', _style: { width: '10%'} },
    { key: 'nom_Cliente', _style: { width: '20%'} },
    { key: 'tipo_Cliente', _style: { width: '10%'} },
    { key: 'telefono', _style: { width: '10%'} },
    { key: 'fax', _style: { width: '10%'} },
    { key: 'celular', _style: { width: '10%'} },
    { key: 'contacto', _style: { width: '10%'} },
    {
      key: 'show_details',
      label: 'Acciones',
      _style: { width: '20%' },
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
            <h1 style={{fontWeight:'bold', lineHeight:'35px', fontSize:'45px',textAlign:'center',textDecoration:'underline'}}>Clientes Registrados</h1>
              <ReactHTMLTableToExcel 
                id="btn test"
                className="btn btn-success"
                table="registry_clients"
                filename="Clientes registrados"
                sheet="pagina 1"
                buttonText={ <img src="pics/SuperProExcel.png" width="25" height="25" /> }
              />
              {/* <CButton className="btn_excel--lines" style={{marginLeft:'2%'}} type="submit" color="btn btn-danger" onClick={() => {
                history.push('/articulos-registro')
              }}>Exportar a PDF</CButton> */}
            </div>
          </CCardHeader>
          <CCardBody>
              <CDataTable
                // addTableClasses="id='registry_clients'"
                // id="disabledInput"
                items={clientsList}
                fields={fields}
                tableFilter={{ placeholder: 'Buscar cliente...', label: 'Consultar:' }}
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
                            <CButton  shape="rounded-pill" style={{width:'100%'}} color="info"  onClick={() => {history.push(`/cliente/${index}`)}}>Editar</CButton>
                            <CButton  shape="rounded-pill" style={{width:'100%'}} color="danger"  onClick={() => {history.push(`/clientes-registro/${index}`) }}>Eliminar</CButton>
                        </td>
                        )
                    },
                }}
              />
              <hr />
          {/* <table id="registry_clients" className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Código Cliente </th>
                <th scope="col">Cédula</th>
                <th scope="col">Nombre</th>
                <th scope="col">Tipo Cliente</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Fax</th>
                <th scope="col">Dirección</th>
                <th scope="col">Email</th>
                <th scope="col">Limite crédito</th>
                <th scope="col">Dias</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clientsList.map(item => (
                <tr key={item.cod_Cliente}>
                   <td>{item.cod_Cliente}</td>
                  <td>{item.cedula}</td>
                  <td>{item.nom_Cliente}</td>
                  <td>{item.tipo_Cliente}</td>
                  <td>{item.telefono}</td>
                  <td>{item.fax}</td>
                  <td>{item.direccion}</td>
                  <td>{item.email}</td>
                  <td>{item.limite_Credito}</td>
                  <td>{item.dias}</td>
                  <td><CButton style={{marginRight:'5%'}} type="submit" color="info" variant="outline" onClick={() => {
                history.push(`/cliente/${item.codigo}`)
              }}>Editar</CButton>
              <CButton type="submit" color="danger" variant="outline" onClick={() => {
                history.push(`/clientes-registro/${item.codigo}`)
              }}>Eliminar</CButton></td>
                </tr>
              ))}
            </tbody>
          </table>   */}
          <CButton className="btn_registry--lines" type="submit" color="btn btn-info" variant="outline" onClick={() => { history.push('/clientes-registro') }}>Registrar Cliente</CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ClientsList
