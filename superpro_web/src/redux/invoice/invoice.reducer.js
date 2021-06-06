import * as TYPS from './invoice.types';

const INITIAL_STATE = {
    invoiceList: [],
};

const InvoiceReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case TYPS.GET_INVOICES:
            return {
                ...state,
                invoiceList: action.invoicesGet
            };

        default: return state;
    }

};

export default InvoiceReducer;