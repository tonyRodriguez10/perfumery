import React, { useState } from 'react'
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
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../../redux/inventory/movements.actions';

const MovementAdd = () => {
  const dispatch = useDispatch();
  const [cod, setCod] = useState('');
	const [name, setName] = useState('');
	const [fecha, setFecha] = useState('');
	const [numDoc, setNumDoc] = useState('');
	const [tipMov, setTipMov] = useState('');
	const [cantidad, setCantidad] = useState('');
	const [cantidadAnt, setCantidadAnt] = useState('');
	const [idUsu, setIdUsu] = useState('');

  function postMovement(){
		dispatch(Actions.postMovement({
      "tipo_Movimiento": tipMov,
      "cod_Articulo": cod,
      "nom_Articulo": name,
      "cantidad_Anterior": cantidadAnt,
      "cantidad": cantidad,
      "fecha": fecha,
      "id_Usuario": idUsu,
      "num_Documento": numDoc,
    }));
	}


  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
            <span style={{fontWeight:'bold', lineHeight:'35px', fontSize:'20px'}}>Registrar nuevo movimiento</span>
              {/* <DocsLink name="-Input"/> */}
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cod">Código del producto</CLabel>
                    <CInput id="cod" placeholder="" required onChange={(e) => setCod(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="name">Nombre del producto</CLabel>
                    <CInput id="name" placeholder="" required onChange={(e) => setName(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="fecha">Fecha</CLabel>
                    <CInput type="date" id="fecha" placeholder="" required onChange={(e) => setFecha(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="numDoc">Número de documento</CLabel>
                    <CInput id="numDoc" placeholder="" required onChange={(e) => setNumDoc(e.target.value)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="3">
                <CFormGroup>
                    <CLabel htmlFor="tipMov">Tipo de movimiento</CLabel>
                    <CSelect custom name="tipMov" id="tipMov" required onChange={(e) => setTipMov(e.target.value)}>
                      <option value="Positivo">Positivo</option>
                      <option value="Negativo">Negativo</option>
                      <option value="Rápido">Rápido</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cantidad">Cantidad</CLabel>
                    <CInput type="number" id="cantidad" placeholder="" required onChange={(e) => setCantidad(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cantidadAnt">Cantidad Anterior</CLabel>
                    <CInput type="number"   id="cantidadAnt" placeholder="" required onChange={(e) => setCantidadAnt(e.target.value)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="idUsu">ID Usuario</CLabel>
                    <CInput id="idUsu" placeholder="" required onChange={(e) => setIdUsu(e.target.value)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="info" onClick={() => postMovement()} disabled>Registrar</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default MovementAdd
