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
import * as Actions from './../../../redux/suppliers/suppliers.actions'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
const SuppliersList = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const suppliersList = useSelector(state => state.suppliers.suppliersList);
  useEffect(() => {
    dispatch(Actions.getSuppliers());
  }, [])

  /* tabla */
  const [suppliersList_formated,updateList] = useState([]);
  useEffect(() => {//builds a list of objects with new key names
    const formatedList = suppliersList.map( supplier => {
      let formatedObj = {
        Código: supplier.codigo,
        Cédula: supplier.cedula,
        Nombre: supplier.nombre,
        'Tipo Código': supplier.codTipo,
        Teléfono: supplier.telefono,
        Fax: supplier.fax,
        Celular:supplier.celular,
        Contacto:supplier.contacto,
        Dirección:supplier.direccion,
        Email:supplier.email,
        Límite:supplier.limite,
        Días:supplier.dias,
        'Último Débito':supplier.ultimo_Debito,
        'Último Crédito':supplier.ultimo_Credito
      }
      return formatedObj;
    });
    updateList(formatedList);
  }, suppliersList)

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
    { key: 'Cédula', _style: { width: '10%'} },
    { key: 'Nombre', _style: { width: '20%'} },
    { key: 'Tipo Código', _style: { width: '10%'} },
    { key: 'Teléfono', _style: { width: '10%'} },
    { key: 'Fax', _style: { width: '10%'} },
    { key: 'Celular', _style: { width: '10%'} },
    { key: 'Contacto', _style: { width: '10%'} },
    { key: 'Dirección', _style: { width: '10%'} },
    { key: 'Email', _style: { width: '10%'} },
    { key: 'Días', _style: { width: '10%'} },
    { key: 'Último Débito', _style: { width: '10%'} },
    { key: 'Último Crédito', _style: { width: '10%'} },
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
            <h1 style={{fontWeight:'bold', lineHeight:'35px', fontSize:'45px',textAlign:'center',textDecoration:'underline'}}>Proveedores Registrados</h1>
              <ReactHTMLTableToExcel 
                id="btn test"
                className="btn btn-success"
                table="registry_suppliers"
                filename="CxC registrados"
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
                items={suppliersList_formated}
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
            {/* <table id="registry_suppliers" className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Codigo </th>
                <th scope="col">Cédula</th>
                <th scope="col">Nombre</th>
                <th scope="col">Tipo</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Fax</th>
                <th scope="col">Celular</th>
                <th scope="col">Contacto</th>
                <th scope="col">Dirección</th>
                <th scope="col">Email</th>
                <th scope="col">Límite</th>
                <th scope="col">Días</th>
                <th scope="col">Último Débito</th>
                <th scope="col">Último Crédito</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {suppliersList.map(item => (
                <tr key={item.codigo}>
                   <td>{item.codigo}</td>
                  <td>{item.cedula}</td>
                  <td>{item.nombre}</td>
                  <td>{item.codTipo}</td>
                  <td>{item.telefono}</td>
                  <td>{item.fax}</td>
                  <td>{item.celular}</td>
                  <td>{item.contacto}</td>
                  <td>{item.direccion}</td>
                  <td>{item.email}</td>
                  <td>{item.limite}</td>
                  <td>{item.dias}</td>
                  <td>{item.ultimo_Debito}</td>
                  <td>{item.ultimo_Credito}</td>
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
                history.push('/proveedores-registro')
              }}>Registrar Proveedor</CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default SuppliersList
