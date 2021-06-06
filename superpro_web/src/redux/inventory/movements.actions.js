import * as TYPS from './movements.types';
import axios from 'axios';

const baseURL = window.$api_baseURL;//Web API Base URL
export const getMovements = () => {

    return dispatch => {
		axios.get(baseURL+'Inventario/TodosMovimientosInventario')
		.then(function (response) {
            console.log(response.data);
			dispatch({
				type: TYPS.GET_MOVEMENTS,
				movementsGet : response.data
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


export const postMovement = (form) => {
	console.log(form);
		return dispatch => {
			axios.post(baseURL+'Inventario/GuardarMovimientoInventario', form)
			.then(function (response) {
				console.log(response.data);
				dispatch({
					type: TYPS.POST_MOVEMENTS,
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
