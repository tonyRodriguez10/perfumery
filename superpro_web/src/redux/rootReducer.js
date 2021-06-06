import { combineReducers } from 'redux';

//import counterReducer from './Counter/counter.reducer';
import pilotReducer from './pilot/pilot.reducer';
//CLIENTS
import clientsReducer from './clients/clients.reducer';
//SUPPLIERS
import suppliersReducer from './suppliers/suppliers.reducer';
//INVENTORY
import articlesReducer from './inventory/articles.reducer';
import familiesReducer from './inventory/families.reducer';
import linesReducer from './inventory/lines.reducer';
import locationsReducer from './inventory/locations.reducer';
//USERS
import usersReducer from './settings/settings.reducer';
//RREPORTES
import invoiceReducer from './invoice/invoice.reducer';


const rootReducer = combineReducers({

    counter: pilotReducer,
    //CLIENTS
    clients: clientsReducer,
    //SUPPLIERS
    suppliers: suppliersReducer,
    //INVENTORY
    articles: articlesReducer,
    families: familiesReducer,
    lines: linesReducer,
    locations: locationsReducer,
    //USERS
    users: usersReducer,
    //REPORTES
    invoice: invoiceReducer,

});

export default rootReducer;