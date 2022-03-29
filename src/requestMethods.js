import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = localStorage.getItem("login");

export const publicrequest = axios.create({
    baseURL: BASE_URL,
})

export const userrequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
})