import { FETCH_DATA } from "../actions/index";

export default function(state = [], action) {
    switch (action.type) {
        case `${FETCH_DATA}_FULFILLED`:
        return [action.payload.data, ...state];
        default: 
            return state;
    }
    
}
