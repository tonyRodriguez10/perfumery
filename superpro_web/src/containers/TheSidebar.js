import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CImg
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)
  return (
    <CSidebar style={{background:"#c7994c",color:'#000000'/* borderWidth:'1px', borderStyle:'solid', borderColor:'black'*/}}
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand style={{background:'#cce6ff'}} className="d-md-down-none" to="/">{/* Sección del logo */}
        {/* <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        /> */}
        <CImg style={{maxWidth:'256px'}} className="c-sidebar-brand-full" src="pics/perfumaniaLogo.jpg" block />
        {/* <CImg className="c-sidebar-brand-minimized" src="pics/logo.png" block /> */}
      </CSidebarBrand>
      <CSidebarNav style={{color:'#000000'}}>

        <CCreateElement
        style={{color:'#000000',fontSize: '12px' }}
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>{/* Botón para angostar el menú */}
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
