import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CButton,
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination
} from '@coreui/react'

/* import usersData from './UsersData' */
import clientsTypeData from './PatientsData'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const PatientsList = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/clientes?page=${newPage}`)
  }

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
          <span style={{fontWeight:'bold', lineHeight:'35px', fontSize:'20px'}}>Pacientes Registrados</span>
            <div className="card-header-actions">
              <CButton type="submit" color="info" variant="outline" onClick={() => {
                history.push('/pacientes-registro')
              }}>Registrar paciente</CButton>
            </div>
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={clientsTypeData}
            fields={[
              { key: 'nombre', _classes: 'font-weight-bold' },
              'edad', 'sexo', 'telefono', 'fechaNacimiento', 'ocupacion',
            ]}
            hover
            striped
            itemsPerPage={5}
            activePage={page}
            clickableRows
            onRowClick={(item) => history.push(`/paciente/${item.nombre}`)}
            /* scopedSlots = {{
              'status':
                (item)=>(
                  <td>
                    <CBadge color={getBadge(item.status)}>
                      {item.status}
                    </CBadge>
                  </td>
                )
            }} */
          />
          <CPagination
            activePage={page}
            onActivePageChange={pageChange}
            pages={1}
            doubleArrows={false}
          />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default PatientsList
