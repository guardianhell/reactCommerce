import { apiInstance } from "./apiInstance"



export const getListDTU = async () => {


    try {
        let voucher = await apiInstance.post("product/games")
        console.log(voucher.data);

        return voucher.data
    } catch (error) {
        console.log(error);

    }

}