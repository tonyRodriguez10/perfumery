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
import * as Actions from './../../../redux/clients/clients.actions';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const ClientsTypeList = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const clientTypesList = useSelector(state => state.clients.clientTypesList);
  useEffect(() => {
    dispatch(Actions.getClientTypes());
  }, [])

  /* tabla */
  const [clientsList_formated,updateList] = useState([]);
  useEffect(() => {//builds a list of objects with new key names
    const formatedList = clientTypesList.map( client => {
      let formatedObj = {
        Código: client.codigo_Tipo,
        Nombre: client.nombre_Tipo,
      }
      return formatedObj;
    });
    updateList(formatedList);
  }, clientTypesList)
 
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
    { key: 'Código', _style: { width: '45%'} },
    { key: 'Nombre', _style: { width: '45%'} },
    {
      key: 'show_details',
      label: 'Acciones',
      _style: { width: '10%' },
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
          <h1 style={{fontWeight:'bold', lineHeight:'35px', fontSize:'45px',textAlign:'center',textDecoration:'underline'}}>Tipos de Clientes Registrados</h1>
              <ReactHTMLTableToExcel 
                id="btn test"
                className="btn btn-success"
                table="registry_clientTypes"
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
                    items={clientsList_formated}
                    fields={fields}
                    tableFilter={{ placeholder: 'Buscar tipo...', label: 'Consultar:' }}
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
                                <CButton  shape="rounded-pill" style={{width:'100%'}} color="info"  onClick={() => {history.push(`/clienteTipo/${index}`)}}>Editar</CButton>
                                <CButton  shape="rounded-pill" style={{width:'100%'}} color="danger"  onClick={() => {history.push(`/clienteTipo/${index}`) }}>Eliminar</CButton>
                            </td>
                            )
                        },
                    }}
                />
              <hr />
          {/* <table id="registry_clientTypes" className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Código </th>
                <th scope="col">Tipo</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clientTypesList.map(item => (
                <tr key={item.codigo_Tipo}>
                   <td>{item.codigo_Tipo}</td>
                  <td>{item.nombre_Tipo}</td>
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
          <CButton className="btn_registry--lines" type="submit" color="btn btn-info" variant="outline" onClick={() => {
                history.push('/clientesTipo-registro')
              }}>Registrar Tipo Cliente</CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ClientsTypeList
