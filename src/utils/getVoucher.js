import { apiInstance } from "./apiInstance"



export const getVoucher = async () => {


    try {
        let voucher = await apiInstance.post("product/voucher")

        return voucher.data
    } catch (error) {
        console.log(error);

    }

}