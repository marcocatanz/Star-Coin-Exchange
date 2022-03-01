export const changePage = (payload) => {
    return {
        type: "CHANGE_PAGE",
        payload: payload
    }
}
export const toggleBuy = (payload) => {
    return {
        type: "TOGGLE_BUY",
        payload: payload
    }
}
export const toggleSell = () => {
    return {
        type: "TOGGLE_SELL",
    }
}
export const updateValues = (payload) => {
    return {
        type: "UPDATE_VALUES",
        payload: payload
    }
}
export const togglePopup = () => {
    return {
        type: "TOGGLE_POPUP",
    }
}
export const toggleDropdown = () => {
    return {
        type: "TOGGLE_DROPDOWN",
    }
}
export const requestConnect = () => {
    return {
        type: "REQUEST_CONNECT",
    }    
}
export const connectFailed = (payload) => {
    return {
        type: "CONNECT_FAILED",
        payload: payload
    }    
}
export const connectSuccess = () => {
    return {
        type: "CONNECT_SUCCESS",
    }    
}
export const attemptBuy = () => {
    return {
        type: "ATTEMPT_BUY",
    }    
}
export const buySuccess = () => {
    return {
        type: "BUY_SUCCESS",
    }    
}
export const buyFail = () => {
    return {
        type: "BUY_FAIL",
    }    
}
