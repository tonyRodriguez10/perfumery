import * as TYPS from './articles.types';
import axios from 'axios';

const baseURL = window.$api_baseURL;//Web API Base URL
export const getArticles = () => {

    return dispatch => {
		axios.get('http://api.superpro.ofigapa.com/api/Inventario/TodosArticulos')
		.then(function (response) {
            //console.log(response.data);
			dispatch({
				type: TYPS.GET_ARTICLES,
				articlesGet : response.data
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

export const postArticle = (form) => {
    return dispatch => {
		axios.post(baseURL+'Inventario/GuardarArticulo', form)
		.then(function (response) {
			dispatch({
				type: TYPS.POST_ARTICLE,
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