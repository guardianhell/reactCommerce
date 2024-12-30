import { apiInstance } from "./apiInstance";

export const getProductDetail = async (productId) => {

    try {
        let productDetail = await apiInstance.get("product-variaty/all/" + productId + "/")
        console.log("PRODUCT DETAILS");
        console.log(productDetail);


        return productDetail.data
    } catch (error) {
        console.log(error)
    }

}