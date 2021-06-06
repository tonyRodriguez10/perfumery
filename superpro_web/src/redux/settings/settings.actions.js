import * as TYPS from './settings.types';
import axios from 'axios';
const baseURL = window.$api_baseURL;//Web API Base URL

export const getUsers = () => {

    return dispatch => {
		axios.get(baseURL+'Usuario/TodosUsuarios')
		.then(function (response) {
            console.log('esta es la data del api '+response.data);
			dispatch({
				type: TYPS.GET_USER,
				usersGet : response.data
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

export const postUser = (form) => {
	console.log(form);
    return dispatch => {
		axios.post(baseURL+'', form)
		.then(function (response) {
			dispatch({
				type: TYPS.POST_USER,
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