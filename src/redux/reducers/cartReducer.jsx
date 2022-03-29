const initialState = {
    products: [],
    quantity: 0,
    total: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload
                ],
                quantity: state.quantity + 1,
                total: state.total + action.payload.price * action.payload.quantity
            }
        case "REMOVE_FROM_CART":
            const updatedProducts = state.products.filter(val => val._id !== action.payload._id)

            return {
                ...state,
                products: updatedProducts,
                quantity: state.quantity - 1,
                total: state.total - action.payload.price * action.payload.quantity
            }
        case "INCREASE_PRODUCT_QUANTITY":
            // const updatedData = state.products.map(val => val._id == action.payload ? { quantity : quantity + 1 } : val);

            return {
                ...state,
                products: [
                    ...state.products,
                    {quantity : quantity+1}
                ],
            }

        default: return state
    }
}

export default cartReducer;