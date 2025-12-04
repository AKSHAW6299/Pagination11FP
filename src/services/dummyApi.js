import { axiosInstance } from "./axiosInstance";

let URL = 'https://dummyjson.com'

export async function getProductsApi() {
    return await axiosInstance.get(`${URL}/products`)
}
