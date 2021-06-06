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
import DiagnosticsData from './DiagnosticsData'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const DiagnosticList = () => {
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
          <span style={{fontWeight:'bold', lineHeight:'35px', fontSize:'20px'}}>Diagnósticos Registrados</span>
            <div className="card-header-actions">
              <CButton type="submit" color="primary" variant="outline" onClick={() => {
                history.push('/diagnosticos-registro')
              }}>Registrar diagnóstico</CButton>
            </div>
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={DiagnosticsData}
            fields={[
              { key: 'paciente', _classes: 'font-weight-bold' },
              'telefono','estadoReceta','fechaExamen','fechaProximoExamen',
            ]}
            hover
            striped
            itemsPerPage={5}
            activePage={page}
            /*clickableRows
             onRowClick={(item) => history.push(`/clienteTipo/${item.paciente}`)} */
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

export default DiagnosticList
