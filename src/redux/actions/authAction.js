import axios from "axios"
import { publicrequest } from "../../requestMethods"

export const userRegister = (user) => async dispatch => {
    try {
        dispatch({
            type: "REGISTER_REQUEST"
        })
        const res = await publicrequest.post("/auth/register", user)
        dispatch({
            type: "REGISTER_SUCCESS",
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: "REGISTER_FAILED",
            payload: err
        })
    }
}

export const userlogin = (user) => async dispatch => {
    try {
        dispatch({
            type: "LOGIN_REQUEST"
        })
        const res = await publicrequest.post("/auth/login", user)
        console.log(res)
        localStorage.setItem('login', res.data.accessToken)
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: "LOGIN_FAILED",
            payload: err
        })
    }
}