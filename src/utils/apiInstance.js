import axios from "axios";

// export const apiInstance = axios.create({
//     baseURL: "http://localhost:8081/api-v1/",
//     headers: {
//         "Content-Type": "application/json"
//     }
// })

export const apiInstance = axios.create({
    baseURL: "http://192.168.1.42:8081/api-v1/",
    headers: {
        "Content-Type": "application/json"
    }
})

export const authApiInstance = axios.create({
    baseURL: "http://192.168.1.42:4000/api-v1/auth/",
    headers: {
        "Content-Type": "application/json"
    }
})