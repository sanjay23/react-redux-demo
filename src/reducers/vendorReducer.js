import { ActionTypes } from "../actions/vendor/action-types";
const initialState = {
    vendor : [],
};

export default function vendorReducer(state = initialState, action) {

  switch (action.type) {
    
    case ActionTypes.GET_VENDOR: {
      return {
        ...state,
        vendor:action.payload
      }
    }
    case 'ADD_VENDOR': {
        return {
            ...state,
            vendor:action.payload
          }
      }
    case 'UPDATE_VENDOR': {
        return {
            ...state,
            venodr:action.payload
        }
    }
    default:
      return state
  }
}