const loginInitialState = {
    user: null,
    isFetching: false,
    error: false
}

export const LoginReducer = (state = loginInitialState, action) => {
    switch (action.type) {

        case "LOGIN_REQUEST":
            return {
                ...state,
                isFetching: true,
            }
        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: action.payload,
                isFetching: false,
            }
        case "LOGIN_FAILED":
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        default: return state
    }
}

const registerInitialState = {
    user: null,
    isFetching: false,
    error: false
}

export const RegisterReducer = (state = registerInitialState, action) => {
    switch (action.type) {

        case "REGISTER_REQUEST":
            return {
                ...state,
                isFetching: true,
            }
        case "REGISTER_SUCCESS":
            return {
                ...state,
                user: action.payload,
                isFetching: false,
            }
        case "REGISTER_FAILED":
            return {
                ...state,
                user: action.payload,
                error: action.payload
            }
        default: return state
    }
}