import * as TYPS from './locations.types';
import axios from 'axios';

const baseURL = window.$api_baseURL;//Web API Base URL
export const getLocations = () => {

    return dispatch => {
		axios.get(baseURL+'Ubicacion/TodasUbicaciones')
		.then(function (response) {
            console.log(response.data);
			dispatch({
				type: TYPS.GET_LOCATIONS,
				locationsGet : response.data
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

export const postLocation = (form) => {
console.log(form);
    return dispatch => {
		axios.post(baseURL+'Ubicacion/GuardarUbicacion', form)
		.then(function (response) {
            console.log(response.data);
			dispatch({
				type: TYPS.POST_LOCATION,
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