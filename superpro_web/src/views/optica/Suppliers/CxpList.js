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
  CLabel,
  CSelect,
  CFormGroup
} from '@coreui/react'

import CxpData from './CxpData'
import { useDispatch, useSelector } from 'react-redux'
import * as Actions from './../../../redux/suppliers/suppliers.actions'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
const CxcList = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const cxpList = useSelector(state => state.suppliers.allCxPList);
  const suppliersList = useSelector(state => state.suppliers.suppliersList);
  const suppliers= suppliersList[0]["nombre"];
  useEffect(() => {
    dispatch(Actions.getCxP());
  }, [])

  /* tabla */
  const [cxpList_formated,updateList] = useState([]);
  useEffect(() => {//builds a list of objects with new key names
    const formatedList = cxpList.map( client => {
      let formatedObj = {
        Proveedor: client.usuario, /*aqui falta agregar proveedor al api */
        NumeroFactura: client.factura_Afectada,
        Fecha: client.fecha_Movimiento,
        SaldoAnterior: client.saldo_Anterior_Factura,
        SaldoActual: client.saldo_Actual_Factura,
        Estado: client.estado,
      }
      return formatedObj;
    });
    updateList(formatedList);
  }, cxpList)
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
    { key: 'Proveedor', _style: { width: '10%'} },
    { key: 'NumeroFactura', _style: { width: '10%'} },
    { key: 'Fecha', _style: { width: '20%'} },
    { key: 'SaldoAnterior', _style: { width: '10%'} },
    { key: 'SaldoActual', _style: { width: '10%'} },
    { key: 'Estado', _style: { width: '10%'} },
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
            <h1 style={{fontWeight:'bold', lineHeight:'35px', fontSize:'45px',textAlign:'center',textDecoration:'underline'}}>Cuentas por Pagar</h1>
              <ReactHTMLTableToExcel 
                id="btn test"
                className="btn btn-success"
                table="registry_cxp"
                filename="CxP registrados"
                sheet="pagina 1"
                buttonText={ <img src="pics/SuperProExcel.png" width="25" height="25" /> }
              />
              {/* <CButton className="btn_excel--lines" style={{marginLeft:'2%'}} type="submit" color="btn btn-danger" onClick={() => {
                history.push('/articulos-registro')
              }}>Exportar a PDF</CButton> */}
            </div>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="ccmonth">Proveedor</CLabel>
                  <CSelect custom name="ccmonth" id="ccmonth">
                    <option value="" >{suppliers}</option>
                    <option value="...">...</option>
                  </CSelect>
                </CFormGroup>
              </CCol>
            </CRow>
            <CDataTable
                // addTableClasses="id='registry_clients'"
                // id="disabledInput"
                items={cxpList_formated}
                fields={fields}
                tableFilter={{ placeholder: 'Buscar dato...', label: 'Consultar:' }}
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
                            <CButton  shape="rounded-pill" style={{width:'100%'}} color="info"  onClick={() => {history.push(`/cliente/${index}`)}} disabled>Editar</CButton>
                            <CButton  shape="rounded-pill" style={{width:'100%'}} color="danger"  onClick={() => {history.push(`/clientes-registro/${index}`) }} disabled>Eliminar</CButton>
                        </td>
                        )
                    },
                }}
              />
              <hr />
            {/* <table id="registry_cxp" className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Número Factura</th>
                <th scope="col">Proveedor</th>
                <th scope="col">Fecha</th>
                <th scope="col">Saldo Anterior</th>
                <th scope="col">Monto movimiento</th>
                <th scope="col">Saldo Actual</th>
                <th scope="col">Estado</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cxpList.map(item => (
                <tr key={item.id_Mov_CxP}>
                   <td>{item.compra_Afectada}</td>
                  <td>{/*FALTA INCLUIR PROVEEDOR EN EL API*</td>
                  <td>{item.fecha_Movimiento}</td>
                  <td>{item.saldo_Anterior_Compra}</td>
                  <td>{item.monto_Movimiento}</td>
                  <td>{item.saldo_Actual_Compra}</td>
                  <td>{item.estado}</td>
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
                history.push('/cuentasPorPagar-abono')
              }}>Pagar Cuenta</CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CxcList
