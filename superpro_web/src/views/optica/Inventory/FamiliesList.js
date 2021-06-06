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
import * as Actions from './../../../redux/inventory/families.actions'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
const FamiliesList = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const familiesList = useSelector(state => state.families.familiesList);
  useEffect(() => {
    dispatch(Actions.getFamilies());
  }, [])

  /* tabla */
  const [familiesList_formated,updateList] = useState([]);
  useEffect(() => {//builds a list of objects with new key names
    const formatedList = familiesList.map( family => {
      let formatedObj = {
        Código: family.codigo_Familia,
        Familia: family.nombre_Familia,
      }
      return formatedObj;
    });
    updateList(formatedList);
  }, familiesList)
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
    { key: 'Familia', _style: { width: '45%'} },
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
            <h1 style={{fontWeight:'bold', lineHeight:'35px', fontSize:'45px',textAlign:'center',textDecoration:'underline'}}>Familias Registradas</h1>
              <ReactHTMLTableToExcel 
                id="btn test"
                className="btn btn-success"
                table="registry_families"
                filename="Familias registradas"
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
                items={familiesList_formated}
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
          {/* <table id="registry_families" className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Código </th>
                <th scope="col">Nombre</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {familiesList_formated.map(item => (
                <tr key={item.codigo}>
                   <td>{item.codigo}</td>
                  <td>{item.nombre}</td>
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
                history.push('/familias-registro')
              }}>Registrar Familia
          </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default FamiliesList
