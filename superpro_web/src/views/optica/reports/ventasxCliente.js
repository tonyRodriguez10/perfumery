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
  CFormGroup,
  CInput,
  CLabel,
  CPagination,
  CRow,
  CSelect,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './../../../redux/clients/clients.actions';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import "moment/locale/es";
import moment from 'moment';

/* Formato para que la libreria del Excel elimine la ultima columna que seria la de las acciones. APLICA PARA TODOS LOS COMPONENTES*/
ReactHTMLTableToExcel.format = (s, c) => {
  if (c && c['table']) {
    const html = c.table;
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const rows = doc.querySelectorAll('tr');

    //for (const row of rows) row.removeChild(row.lastChild);/* justo acá */

    c.table = doc.querySelector('table').outerHTML;
  }

  return s.replace(/{(\w+)}/g, (m, p) => c[p]);
};

const ClientsList = () => {
  const history = useHistory()//can be used for moving to another page by a click for example, or consulting the previous page
  const dispatch = useDispatch();//communicates react with redux
  const reportsList = useSelector(state => state.invoice.invoiceList);//selects part of the state that redux handles
  const clientsList = useSelector(state => state.clients.clientsList);//selects part of the state that redux handles
  const [data, setData] = useState();
  const [f, setF]=useState();
  const [exento, setExento]=useState();
  const [gravado, setGravado]=useState();
  const [impuesto, setImpuesto]=useState();
  useEffect(() => {
    dispatch(Actions.getClients());//react 'says: redux please recive this order(action) and do your magic'
  }, [])//empty array indicates the effect to execute only one time
  const [clientsList_formated,updateList] = useState([]);
  const [cliente, setCliente]=useState();


  function handleChange(e) {
    setCliente(e.target.value);
    const filteredDateItems = reportsList.filter(item => {
      return item.cod_Cliente === cliente
  }); 
  setData(filteredDateItems)
  let total = 0;
    let exento=0;
    let gravado=0;
    let impuesto=0;
    if(data!= null){
            const formatedList = data.map( client => {
            total += client.venta_Total
            exento+=client.subTotal_Exento
            gravado+=client.subTotal_Gravado
            impuesto+=client.imp_Venta_Total
            let formatedObj = {
                num_Factura: client.num_Factura,
                fecha: client.fecha,
                cod_Cliente: client.cod_Cliente,
                nom_Cliente: client.nom_Cliente,
                imp_Venta_Total: client.imp_Venta_Total,
                subTotal_Exento:client.subTotal_Exento,
                subTotal_Gravado:client.subTotal_Gravado,
                costo_Total: client.costo_Total,
                venta_Total:client.venta_Total
            }
            setF(total);
            setExento(exento);
            setGravado(gravado);
            setImpuesto(impuesto);
            return formatedObj;
        });
        updateList(formatedList);
    }
    
  }

  // function test(){
      
  //   }
  
  //     useEffect(() => {
  //       test()
        
  //   }, cliente)

  function reset(){
    updateList(reportsList)
  }

  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            <div className="card-exportBTN--inventory">
            <h1 style={{fontWeight:'bold', lineHeight:'35px', fontSize:'45px',textAlign:'center',textDecoration:'underline'}}>Ventas por Cliente</h1>
              <ReactHTMLTableToExcel 
                id="btn test"
                className="btn btn-success"
                table="registry_clients"
                filename="Reportes x Cliente"
                sheet="pagina 1"
                buttonText={ <img src="pics/SuperProExcel.png" width="25" height="25" /> }
              />
              <CButton className="btn_excel--lines" style={{marginLeft:'2%'}} type="submit" color="btn btn-warning" onClick={()=>reset()}><img src="pics/SuperProRefresh.png" width="25" height="25" /> </CButton>  

              <CRow>
              <CCol>
              <CFormGroup style={{width:'25%', textAlign:'left'}}>
                    <CLabel htmlFor="proveedor">Clientes</CLabel>
                    <CSelect custom name="proveedor" id="proveedor" required onChange={handleChange}>
                        <option >Por favor seleccione un cliente...</option>
                      {clientsList.map((obj,index ) => <option key={index} value={obj.cod_Cliente}>{obj.nom_Cliente}</option>)}
                    </CSelect>
                  </CFormGroup>
              </CCol>
            </CRow>
            </div>
          </CCardHeader>
          <CCardBody>
              <hr />
          <table id="registry_clients" className="table table-striped">
            <thead>
              <tr>
              <th scope="col"># Factura</th>
                <th scope="col">Fecha</th>
                <th scope="col">Código Cliente</th>
                <th scope="col">Nombre Cliente</th>
                <th scope="col">Impuesto (IVA)</th>
                <th scope="col">Exento</th>
                <th scope="col">Gravado</th>
                <th scope="col">Costo Total</th>
                <th scope="col">Venta Total</th>
              </tr>
            </thead>
            <tbody>
              {clientsList_formated.map(item => (
                <tr key={item.num_Factura}>
                   <td>{item.num_Factura}</td>
                  <td>{moment(item.fecha).format('YYYY-MM-DD')}</td>
                  <td>{item.cod_Cliente}</td>
                  <td>{item.nom_Cliente}</td>
                  <td>{item.imp_Venta_Total}</td>
                  <td>{item.subTotal_Exento}</td>
                  <td>{item.subTotal_Gravado}</td>
                  <td>{item.costo_Total}</td>
                  <td>{item.venta_Total}</td>
                </tr>
              ))}
            </tbody>
            <tr> <td hidden>Total Exento: {exento}</td></tr>
            <tr><td hidden>Total Impuesto: {gravado}</td></tr>
            <tr> <td hidden>Total Gravado: {impuesto}</td></tr>
            <tr> <td hidden>Total: {f}</td></tr>
          </table>  
          <hr /><hr />
          <CRow style={{textAlign:'center'}}> 
          <CCol >
                    <CFormGroup style={{padding:'2px',display:'block', width:'20%', marginLeft:'39rem'}}>
                      <CLabel tyle={{marginLeft:'1rem'}} htmlFor="Total">Ventas Exentas: </CLabel>
                      <CInput style={{textAlign: 'center', color:'black'}} id="precioVenta2" required value={exento} />
                  
                      <CLabel style={{marginLeft:'1rem',}} htmlFor="Total">Ventas Gravadas:  </CLabel>
                      <CInput style={{textAlign: 'center', color:'black'}} id="precioVenta2" required value={gravado} />
                      
                      <CLabel style={{marginLeft:'1rem'}}  htmlFor="Total">Impuestos: </CLabel>
                      <CInput style={{textAlign: 'center', color:'black'}} id="precioVenta2" required value={impuesto} />

                      <CLabel style={{marginLeft:'1rem'}}  htmlFor="Total">Total: </CLabel>
                      <CInput style={{textAlign: 'center', color:'black'}} id="precioVenta2" required value={f} />
                    </CFormGroup>
          </CCol>
      </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ClientsList;
