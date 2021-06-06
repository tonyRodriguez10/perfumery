import { INCREMENT, DECREMENT } from './pilot.types';


export const increaseCounter = () => {

    return {

        type: INCREMENT,

    };

};

export const decreaseCounter = () => {

    return {

       type: DECREMENT,

    };

};


/* export const pilotAction = () => {//***with dispatch***

    return dispatch => {
		axios.get(queryString_getSolicitudes)
		.then(function (response) {
			dispatch({
				type: GET_SOLICITUDES,
				solicitudes : response.data,
				ind_status_get_solicitudes: response.status,
				loadingSolicitudes: false
			})
		})
		.catch(function (error) {
			if (error.response) {
				dispatch({
					type: GET_SOLICITUDES,
					ind_status_get_solicitudes: error.response.status
				})
				console.log(error.response.data);
				console.log('status caido '+error.response.status);
			} else if (error.request) {
				dispatch({
					type: GET_SOLICITUDES,
					ind_status_get_solicitudes: error.request
				})
				console.log(error.request);
			} else {
				console.log('Error', error.message);
			}
		})
	}//fin dispatch

}; */


/* export const pilotActionEmptyFetchWithAxios = () => {//***without dispatch***

    axios
    .get("examples/example.json")
    .then(response => {
        console.log("response", response)
    })
    .catch(error => {
        if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data)
        } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request)
        } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message)
        }
        console.log(error.config)
    })

}; */

/* Any Secondary Action Sample */
/* .then(function (response) {//use when request ends
    setTimeout(() => {
        dispatch({
            type: TOGGLE_SCREENBLOCKER,
            openScreenBlocker: false
        })
    }, 5000)
}) */