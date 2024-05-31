import {api} from '../Utils/api.js'
export const GET_ALL_PRODUCTS = async () => {
    const response = await api.get("products")
    return response.data
}
<<<<<<< HEAD
export const GET_PRODUCT_BY_ID=async(id)=>{
    const response=await api.get(`products/${id}`);
    return response.data
}
=======
export const GET_PRODUCT_BY_ID = async (id) => {
    const response = await api.get(`products/${id}`)
    return response.data
}

>>>>>>> 7b5910999a77278dec1c678f346187119e7afc25
