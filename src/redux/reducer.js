const initialState = {
    page: "about",
    connected: false,
    toggler: "buy",
    popup: "closed",
    dropdown: "closed",
    loading: false,
    message: "",
    ethValue: 0,
    starValue: 0,
    error: false,
    account: null,
    balance: 0
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "CHANGE_PAGE":
            return{
                ...state,
                page: action.payload,
                toggler: "buy",
                ethValue: 0,
                starValue: 0
            };
        case "TOGGLE_BUY":
            return{
                ...state,
                toggler: "buy",
                ethValue: 0,
                starValue: 0
            };
        case "TOGGLE_SELL":
            return{
                ...state,
                toggler: "sell",
                ethValue: 0,
                starValue: 0
            };
        case "UPDATE_VALUES":
            return{
                ...state,
                ethValue: action.payload.ethValue,
                starValue: action.payload.starValue
            };
        case "TOGGLE_POPUP":
            if(state.popup == "closed"){
               return{
                   ...state,
                    popup: "open",
                };
            }else{
                return{
                    ...state,
                    popup: "closed",
                    loading: false,
                    error: false
                }
            }
        case "TOGGLE_DROPDOWN":
            if(state.dropdown == "closed"){
               return{
                   ...state,
                    dropdown: "open",
                };
            }else{
                return{
                    ...state,
                    dropdown: "closed",
                }
            }
        case "REQUEST_CONNECT":
            return{
                ...state,
                loading: true,
                error: false,
                message: "Connecting to MetaMask"
            };
        case "CONNECT_FAILED":
            return{
                ...state,
                error: true,
                message: action.payload,
                connected: false
            };
        case "CONNECT_SUCCESS":
            return{
                ...state,
                error: false,
                loading: false,
                message: "Connection Successful!",
                connected: true
            };
        case "ATTEMPT_BUY":
            return{
                ...state,
                loading: true,
                error: false,
                popup: "open",
                message: "Swapping Tokens"
            };
        case "BUY_SUCCESS":
            return{
                ...state,
                loading: false,
                error: false,
                message: "Transaction Complete",
                dropdown: "open"
            };
        case "BUY_FAIL":
            return{
                ...state,
                error: true,
                message: "Transaction Failed"
            };
        default:
            return{
                ...initialState
            }
    }
}

export default rootReducer;