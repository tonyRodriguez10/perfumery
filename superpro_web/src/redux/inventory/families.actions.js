import * as TYPS from './families.types';
import axios from 'axios';

const baseURL = window.$api_baseURL;//Web API Base URL
export const getFamilies = () => {

    return dispatch => {
		axios.get(baseURL+'Familia/TodosFamilias')
		.then(function (response) {
            console.log(response.data);
			dispatch({
				type: TYPS.GET_FAMILIES,
				familiesGet : response.data
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

export const postFamily = (form) => {
	console.log(form);
    return dispatch => {
		axios.post(baseURL+'Familia/GuardarFamilia', form)
		.then(function (response) {
            console.log(response.data);
			dispatch({
				type: TYPS.POST_FAMILY,
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