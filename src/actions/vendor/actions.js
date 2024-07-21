import { ActionTypes } from './action-types';

/// payload: the object which is assigned to this property contains the data which are sent
/// to the store
export const addVendor = (Vendor) => {
    return {
        type: ActionTypes.ADD_VENDOR,
        payload: Vendor
    }
}
export const getVendor = (Vendor) => {
    return {
        type: ActionTypes.GET_VENDOR,
        payload: Vendor

    }
}
export const updateVendor = () => {
    return {
        type: ActionTypes.UPDATE_VENDOR,

    }
}

export const deleteVendor = () => {
    return {
        type: ActionTypes.DELETE_VENDOR,
    }
}