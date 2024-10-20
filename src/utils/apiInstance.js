import axios from "axios";

export const apiInstance = axios.create({
    baseURL: "http://localhost:8081/api-v1/",
    headers: {
        "Content-Type": "application/json"
    }
})