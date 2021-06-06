import * as TYPS from './clients.types';
import axios from 'axios';

const baseURL = window.$api_baseURL;//Web API Base URL
export const getClients = () => {

    return dispatch => {
		axios.get(baseURL+'Cliente/TodosClientes')
		.then(function (response) {
            console.log(response.data);
			dispatch({
				type: TYPS.GET_CLIENTS,
				clientsGet : response.data
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

export const getClientTypes = () => {

    return dispatch => {
		axios.get(baseURL+'TipoClientes/TodosTipoCliente')
		.then(function (response) {
            console.log(response.data);
			dispatch({
				type: TYPS.GET_CLIENT_TYPES,
				clientTypesGet : response.data
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

export const getClientTypesByDate = () => {

    return dispatch => {
		axios.get(baseURL+'CXP/MovimientosXFecha/0, 2021-04-25, 2021-04-25')
		.then(function (response) {
            console.log(response.data);
			dispatch({
				type: TYPS.GET_CLIENT_TYPES,
				clientTypesGet : response.data
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

export const getAllCxc = () => {

    return dispatch => {
		axios.get(baseURL+'CXC/TodosMovimientos')
		.then(function (response) {
            console.log(response.data);
			dispatch({
				type: TYPS.GET_ALL_CXC,
				allCxcGet: response.data
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

export const postClient = (form) => {
	console.log(form);
    return dispatch => {
		axios.post(baseURL+'Cliente/CrearCliente', form)
		.then(function (response) {
			dispatch({
				type: TYPS.POST_CLIENT,
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

export const postTypeClient = (form) => {
	console.log(form);
    return dispatch => {
		axios.post(baseURL+'TipoClientes/CrearTipoCliente', form)
		.then(function (response) {
			dispatch({
				type: TYPS.POST_TYPECLIENT,
				payload : response.data
			})
			alert('Tipo de cliente agregado con éxito!!')
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

export const postCxcAbono = (form) => {
	console.log(form);
    return dispatch => {
		axios.post(baseURL+'CXC/CrearMovimiento', form)
		.then(function (response) {
			dispatch({
				type: TYPS.POST_CXCABONO,
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