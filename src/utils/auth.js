import { authApiInstance } from "./apiInstance";


export const registerApi = async (firstName, lastName, email, password, reTypePassword) => {
    try {
        const registerData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            repeat_password: reTypePassword,
            user_levels: 1,
            status: 1
        }

        const registerResponse = await authApiInstance.post("/register", registerData).then((res) => {
            return res.data
        }).catch((error) => {
            const errorData = {
                Code: "400",
                message: error.message
            }
            return errorData
        })

        return registerResponse

    } catch (error) {
        console.log(error);
        return error.message
    }
}

export const loginApi = async (email,password) => {
    try {
        const loginData = {
            email: email,
            password: password
        }

        const loginResponse = await authApiInstance.post("/login", loginData).then((res) => {

            console.log(res);
            

            return res.data
        }).catch((error) => {
            console.log(error);
            const errorData = {
                Code: "400",
                message: error.message
            }
            return errorData
        })


    } catch (error) {
        console.log(error);
        return error.message

    }
}