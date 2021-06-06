import * as TYPS from './lines.types';
import axios from 'axios';

const baseURL = window.$api_baseURL;//Web API Base URL
export const getLines = () => {

    return dispatch => {
		axios.get(baseURL+'Linea/TodasLineas')
		.then(function (response) {
            console.log(response.data);
			dispatch({
				type: TYPS.GET_LINES,
				linesGet : response.data
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

export const postLine = (form) => {
console.log(form);
    return dispatch => {
		axios.post(baseURL+'Linea/GuardarLinea', form)
		.then(function (response) {
			dispatch({
				type: TYPS.POST_LINE,
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