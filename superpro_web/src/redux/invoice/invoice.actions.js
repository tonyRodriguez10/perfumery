import * as TYPS from './invoice.types';
import axios from 'axios';

const baseURL = window.$api_baseURL;//Web API Base URL
export const getInvoices = () => {

    return dispatch => {
		axios.get(baseURL+'Facturacion/TodasFacturas')
		.then(function (response) {
            console.log(response.data);
			dispatch({
				type: TYPS.GET_INVOICES,
				invoicesGet : response.data
			})
		})
		.catch(function (error) {
			if (error.response) {
				console.log(error.response.data);
				console.log('status caido '+error.response.status);
			} else if (error.request) {
				console.log(error.request);
			} else {
				console.log('Error', error.message);
			}
		})
	}//fin dispatch

};








