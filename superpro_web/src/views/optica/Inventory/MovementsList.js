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
import * as Actions from '../../../redux/inventory/movements.actions';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
const MovementsList = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const movementsList = useSelector(state => state.lines.movementsList);
  console.log(movementsList)
  useEffect(() => {
    dispatch(Actions.getMovements());
  }, [])

  /* tabla */
  const [movementsList_formated,updateList] = useState([]);
  // useEffect(() => {//builds a list of objects with new key names
  //   const formatedList = movementsList.map( movement => {
  //     let formatedObj = {
  //       codigo: movement.cod_Articulo,
  //       nombre: movement.nom_Articulo,
  //       fecha:  movement.fecha,
  //       numeroDoc:movement.num_Documento,
  //       tipo: movement.tipo_Movimiento,
  //       cantidad: movement.cantidad,
  //       cantidadAnterior: movement.cantidad_Anterior,
  //       idUsuario: movement.id_Usuario,
  //     }
  //     return formatedObj;
  //   });
  //   updateList(formatedList);
  // }, movementsList)
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
    { key: 'codigo', _style: { width: '10%'} },
    { key: 'nombre', _style: { width: '10%'} },
    { key: 'fecha', _style: { width: '20%'} },
    { key: 'numeroDoc', _style: { width: '10%'} },
    { key: 'tipo', _style: { width: '10%'} },
    { key: 'cantidad', _style: { width: '10%'} },
    { key: 'cantidadAnterior', _style: { width: '10%'} },
    { key: 'idUsuario', _style: { width: '10%'} },
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
            <h1 style={{fontWeight:'bold', lineHeight:'35px', fontSize:'45px',textAlign:'center',textDecoration:'underline'}}>Movimientos Registrados</h1>
              <ReactHTMLTableToExcel 
                id="btn test"
                className="btn btn-success"
                table="registry_movements"
                filename="Movimientos registrados"
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
                items={movementsList_formated}
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
          {/* <table id="registry_movements" className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Código </th>
                <th scope="col">Nombre</th>
                <th scope="col">Fecha</th>
                <th scope="col"># Documento</th>
                <th scope="col">Tipo movimiento</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Cantidad Anterior</th>
                <th scope="col">ID Usuario</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* {movementsList.map(item => (
                <tr key={item.codigo}>
                   <td>{item.codigo}</td>
                  <td>{item.nombre}</td>
                  <td>{item.fecha}</td>
                  <td>{item.numeroDoc}</td>
                  <td>{item.tipo}</td>
                  <td>{item.cantidad}</td>
                  <td>{item.cantidadAnterior}</td>
                  <td>{item.idUsuario}</td>
                  <td><CButton style={{marginRight:'5%'}} type="submit" color="info" variant="outline" onClick={() => {
                history.push(`/cliente/${item.codigo}`)
              }}>Editar</CButton>
              <CButton type="submit" color="danger" variant="outline" onClick={() => {
                history.push(`/clientes-registro/${item.codigo}`)
              }}>Eliminar</CButton></td>
                </tr>
              ))} *
            </tbody>
          </table> */}
          <CButton className="btn_registry--lines" type="submit" color="btn btn-info" variant="outline" onClick={() => {
                history.push('/movimientos-registro')
              }}>Registrar Movimiento</CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default MovementsList
