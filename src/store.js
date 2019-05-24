import {createStore} from 'redux';

const initialState = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            img: '',
            mortgage: '',
            rent: '',
            property: []
};

export const ADD_PROPERTY = "ADD_PROPERTY";
export const CLEAR_FIELDS = "CLEAR_FIELDS";
export const UPDATE_PROPERTY = "UPDATE_PROPERTY";



function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case UPDATE_PROPERTY:
            return { ...state.property, payload}
        case CLEAR_FIELDS:
            return { state };
        case ADD_PROPERTY:
            const { 
                name,
                address, 
                city, 
                state, 
                zipcode, 
                img, 
                mortgage, 
                rent
            } = state;
            const property = {
                name,
                address, 
                city, 
                state, 
                zipcode, 
                img, 
                mortgage, 
                rent
            };
            const newProperties = [ ...state.property, property ];
        return { ...state, property: newProperties };
        default:
        return initialState;
        
    }
}




export default createStore(reducer);