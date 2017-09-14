import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {reducer as toastrReducer} from 'react-redux-toastr';


const keycloakReducer = (keycloak = {}, action) => {
    return keycloak;
}


const rootReducer = combineReducers({
    form: formReducer,
    keycloak: keycloakReducer,
    toastr: toastrReducer
});

export default rootReducer;