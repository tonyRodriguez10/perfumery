import React from 'react';
import PropTypes from 'prop-types';
import { CWidgetBrand, CRow, CCol } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import ChartLineSimple from '../charts/ChartLineSimple';

const WidgetsBrand = ({withCharts})=>{

  // render

  return withCharts ?
  <CRow>
    <CCol sm="6" lg="3">
      <CWidgetBrand
        color="facebook"
        rightHeader="89"
        rightFooter="clientes"
        leftHeader="5"
        leftFooter="tipos"
        color="gradient-primary"
      >
        
      </CWidgetBrand>
    </CCol>

    <CCol sm="6" lg="3">
      <CWidgetBrand
        color="twitter"
        rightHeader="6"
        rightFooter="proovedores"
        leftHeader="12"
        leftFooter="tipos"
        color="gradient-info"
      >
        
      </CWidgetBrand>
    </CCol>

    <CCol sm="6" lg="3">
      <CWidgetBrand
        color="linkedin"
        rightHeader="50"
        rightFooter="lineas"
        leftHeader="30"
        leftFooter="familias"
        color="gradient-success"
      >
        
      </CWidgetBrand>
    </CCol> 

    <CCol sm="6" lg="3">
      <CWidgetBrand
        rightHeader="12"
        rightFooter="cxc"
        leftHeader="4"
        leftFooter="cxp"
        color="gradient-warning"
      >
        
      </CWidgetBrand>
    </CCol>
  </CRow> :
  
  <CRow>
    <CCol sm="6" lg="3">
      <CWidgetBrand
        color="facebook"
        rightHeader="89"
        rightFooter="clientes"
        leftHeader="5"
        leftFooter="tipos"
      >
        <CIcon
          name="cib-facebook"
          height="56"
          className="my-4"
        />
      </CWidgetBrand>
    </CCol>

    <CCol sm="6" lg="3">
      <CWidgetBrand
        color="twitter"
        rightHeader="973k"
        rightFooter="followers"
        leftHeader="1.792"
        leftFooter="tweets"
      >
        <CIcon
          name="cib-twitter"
          height="56"
          className="my-4"
        />
      </CWidgetBrand>
    </CCol>

    <CCol sm="6" lg="3">
      <CWidgetBrand
        color="linkedin"
        rightHeader="500+"
        rightFooter="contracts"
        leftHeader="292"
        leftFooter="feeds"
      >
        <CIcon
          name="cib-linkedin"
          height="56"
          className="my-4"
        />
      </CWidgetBrand>
    </CCol>

    <CCol sm="6" lg="3">
      <CWidgetBrand
        rightHeader="12"
        rightFooter="events"
        leftHeader="4"
        leftFooter="meetings"
        color="gradient-warning"
      >
        <CIcon
          name="cil-calendar"
          height="56"
          className="my-4"
        />
      </CWidgetBrand>
    </CCol>
  </CRow>
}

WidgetsBrand.propTypes = {
  withCharts: PropTypes.bool
}

export default WidgetsBrand
