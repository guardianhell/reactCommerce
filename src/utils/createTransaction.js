import { apiInstance } from "./apiInstance";

export const createTransaction = async (data) => {

    try {

        const transactionDetail = {
            "user_id": 1,
            "total_amount": data.total_amount,
            "currency_name": "Rupiah",
            "product": [
                {
                    "product_variaty_id": data.product_variaty_id,
                    "qty": 1
                }
            ]
        }
        let transaction = await apiInstance.post("transaction/create", transactionDetail)

        return transaction.data

    } catch (error) {
        console.log(error);
        return error


    }


}