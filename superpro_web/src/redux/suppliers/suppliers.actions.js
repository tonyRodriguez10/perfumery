import * as TYPS from './suppliers.types';
import axios from 'axios';

const baseURL = window.$api_baseURL;//Web API Base URL
export const getSuppliers = () => {

    return dispatch => {
		axios.get(baseURL+'Proveedor/TodosProveedores')
		.then(function (response) {
            console.log(response.data);
			dispatch({
				type: TYPS.GET_SUPPLIERS,
				suppliersGet : response.data
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

export const getSupplierTypes = () => {

    return dispatch => {
		axios.get(baseURL+'Proveedor/TodosTiposProveedores')
		.then(function (response) {
            console.log(response.data);
			dispatch({
				type: TYPS.GET_SUPPLIERS_TYPES,
				supplierTypesGet : response.data
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

export const getCxP = () => {

    return dispatch => {
		axios.get(baseURL+'CXP/TodosMovimientosCXP')
		.then(function (response) {
            console.log(response.data);
			dispatch({
				type: TYPS.GET_ALL_CXP,
				allCxPGet : response.data
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

export const postSupplier = (form) => {
	console.log(form);
    return dispatch => {
		axios.post(baseURL+'Proveedor/CrearProveedor', form)
		.then(function (response) {
			dispatch({
				type: TYPS.POST_SUPPLIERS,
				payload : response.data
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

export const postSupplierType = (form) => {
	console.log(form);
    return dispatch => {
		axios.post(baseURL+'Proveedor/CrearTiposProveedor', form)
		.then(function (response) {
			dispatch({
				type: TYPS.POST_SUPPLIERS_TYPES,
				payload : response.data
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

export const postCxpAbono = (form) => {
	console.log(form);
    return dispatch => {
		axios.post(baseURL+'CXP/CrearMovimientoCxP', form)
		.then(function (response) {
			dispatch({
				type: TYPS.POST_CXP,
				payload : response.data
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