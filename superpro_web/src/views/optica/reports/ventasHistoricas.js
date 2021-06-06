import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import "@coreui/coreui/dist/css/coreui.css";
import { CDataTable, CCard, CInput, CFormGroup, CLabel, CCol, CCardBody, CCardHeader, CRow, CSelect, CButton } from "@coreui/react";
import usersData from "./../reports/usersData";
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './../../../redux/invoice/invoice.actions';
import "moment/locale/es";
import moment from 'moment';
import ClientEdit from '../Clients/ClientEdit';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { reset } from 'enzyme/build/configuration';


const Table = () => {
  const dispatch = useDispatch();//communicates react with redux
  const reportsList = useSelector(state => state.invoice.invoiceList);//selects part of the state that redux handles
  useEffect(() => {
    dispatch(Actions.getInvoices());//react 'says: redux please recive this order(action) and do your magic'
  }, [])//empty array indicates the effect to execute only one time

  const [data, setData] = useState();
  const [f, setF]=useState();//muestra el valor del campo TOTAL
  const [exento, setExento]=useState();//muestra el valor del campo EXENTO
  const [gravado, setGravado]=useState();//muestra la sumatoria del campo GRAVADO de todas las facturas
  const [impuesto, setImpuesto]=useState();//muestra la sumatoria del campo IMPUESTO de todas las facturas
  const [clientsList_formated,updateList] = useState([]);//carga todas las facturas que vienen del API
  const [fechaIncio,setFechaInicio ]=useState();//carga la fecha final que el usuario digita para filtrar
  const [fechaFin,setFechaFin ]=useState();//carga la fecha final que el usuario digita para filtrar
  const [filteredDateItems,setfilteredDateItems ]=useState([]);//carga la fecha final que el usuario digita para filtrar

  //evento que setea la finalFin
  function handleChange2(e) { 
      setFechaFin(e.target.value)
  }
  //evento que setea la fechaInicio
  function handleChange(e) {
    setFechaInicio(e.target.value)  
  }

  function test(){
    let filteredDateItems= ( reportsList.filter(item => {
        
      const formattedDate = (moment(item.fecha)).format('YYYY-MM-DD') //parsea la fecha que viene del API a un formato valido que se pueda comparar con las fechas entrantes
      return formattedDate >= fechaIncio && formattedDate <= fechaFin;

  }));
  setData(filteredDateItems)//setea el array que se renderizara cada vez que usuario filtre
  }



  useEffect(() => {
    test()
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
    else{
        updateList(reportsList)
    }
}, [fechaFin])
 
function reset(){
  updateList(reportsList)
}

  return (
    <CCard >
        <CCardHeader>
            <div className="card-exportBTN--inventory">
            <h1 style={{fontWeight:'bold', lineHeight:'35px', fontSize:'45px',textAlign:'center',textDecoration:'underline'}}>Ventas Históricas. </h1>
              <ReactHTMLTableToExcel 
                id="btn test"
                className="btn btn-success"
                table="registry_clients"
                filename="Historico de Ventas"
                sheet="pagina 1"
                buttonText= { <img src="pics/SuperProExcel.png" width="25" height="25" /> }
              />
               <CButton className="btn_excel--lines" style={{marginLeft:'2%'}} type="submit" color="btn btn-warning" onClick={()=>reset()}><img src="pics/SuperProRefresh.png" width="25" height="25" /> </CButton>  
              <CRow style={{textAlign:'center'}}>
              <CCol>
              <CFormGroup style={{display:'inline-flex'}}>
                    <CLabel htmlFor="proveedor" style={{paddingRight:'10px', width:'100%', paddingTop:'8px'}}>Fecha Inicial : </CLabel>
                    <CInput style={{paddingRight:'1rem', width:"30%"}} type="date" id="ccnumber" placeholder="" required onChange={handleChange}/>
                    <CLabel style={{paddingRight:'10px', paddingLeft:'1rem',width:'100%', paddingTop:'8px'}}htmlFor="proveedor">Fecha Final :</CLabel>
                    <CInput type="date" id="ccnumber" placeholder="" required onChange={handleChange2}/>

                    {/* <CSelect custom name="proveedor" id="proveedor" required onChange={handleChange}>
                        <option value="...">Escoaje un cliente</option>
                      {clientsList.map((obj,index ) => <option key={index} value={obj.cod_Cliente}>{obj.nom_Cliente}</option>)}
                    </CSelect> */}
                  </CFormGroup>
              </CCol>
            </CRow>
            </div>
          </CCardHeader>
        <CCardBody>
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
      {/* <CDataTable
        items={clientsList_formated}
        fields={fields}
        columnFilter
        tableFilter={{ label: "Table filter:", placeholder: "type...", type: "date"}}
        sorter
        sorterValue={{ column: "fecha", asc: true }}
        hover
        pagination
        scopedSlots={{
          fecha: ({ fecha }) => {
            const formattedDate = (moment(fecha)).format('DD-MMM-YYYY')
            return <td>{fecha}</td>;
          }
        }}
        // columnFilterSlot={{
        //   fecha: (
        //     <>
        //       From:{" "}
        //       <input
        //         type="text"
                
        //         onChange={e => setStartDate(e.target.value)}
        //         className="mr-2"
        //       />
        //        To:{" "}
        //       <input
        //         type="date"
                
        //         onChange={e => setEndDate(e.target.value)}
        //       /> 
        //     </>
        //   )
        // }}
        columnHeaderSlot={{
           fecha: <i>Custom fecha Header</i>
         }}
      /> */}
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
  );
};

export default Table;
