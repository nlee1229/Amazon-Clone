export const initialState = {
    cart: [],
};

// Selector
export const getCartTotal = (cart) => 
    cart?.reduce((amount, item) => item.price + amount, 0); // Reduce iterates through the cart and tallies the total... Have an initial amount, then add to the total

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
            default: 
                return state;
    }
};

export default reducer;