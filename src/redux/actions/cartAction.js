export const addtocart = (data) => {
    return {
        type: "ADD_TO_CART",
        payload: data
    }
}

export const removefromcart = (data) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: data
    }
}

export const incProductQuantity = (id) => {
    return {
        type: "INCREASE_PRODUCT_QUANTITY",
        payload: id
    }
}

export const decProductQuantity = (id) => {
    return {
        type: "DECREASE_PRODUCT_QUANTITY",
        payload: id
    }
}
