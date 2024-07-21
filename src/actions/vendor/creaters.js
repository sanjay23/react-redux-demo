import axios from 'axios';
import { addVendor, getVendor, updateVendor } from './actions';
import { setError, setSuccess } from '../message/messageActions';


export const updateVendorAction = (Vendor, id, config) => {
    return (dispatch) => {
        axios.put(`http://localhost/api/admin/v1/vendor/${id}`, Vendor,config)
            .then(response => {
                console.log(response);
                dispatch(updateVendor());
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export const addVendorAction = (Vendor, config) => {
    
    return (dispatch) => {
        /// axios is a library used to make request to an API, 
        /// return data and manipulate the data .
        axios.post('http://localhost/api/admin/v1/vendor', Vendor,config)
            .then(response => {
                dispatch(setSuccess(response.data));
            })
            .catch(error => {
                dispatch(setError(error.response.data));
            });
    }
}


export const getVendorAction = (config) => {
    return (dispatch) => {
        console.log(config);
        axios.get('http://localhost/api/admin/v1/vendor',config)
            .then(response => {
                dispatch(getVendor(response.data));
            })
            .catch(error => {
                console.log(error);
            });
    }
}