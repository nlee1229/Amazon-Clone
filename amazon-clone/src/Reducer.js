export const initialState = {
    cart: [],
    user: null
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

            case 'EMPTY_CART':
                return {
                    ...state,
                    cart: []
                }

        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let newCart = [...state.cart];
            
            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.warn (
                    `Can't remove product (id: ${action.id}) as it's not in the cart!`
                )
            }
            
            return {
                ...state,
                cart: newCart
            }

            case 'SET_USER':
                return {
                    ...state, // get all users
                    user: action.user // update the user dispatched in App.js line 22
                }

            default: 
                return state;
    }
};

export default reducer;