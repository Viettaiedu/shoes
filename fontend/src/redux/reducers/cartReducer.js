import * as typesActions  from '../constants/cartConstants';



export const getCartReducer = (state = {cartItems : []} ,action) => {
    switch(action.type) {
        case  typesActions.ADD_TO_CART :
        const item = action.payload ;
        const itemExist = state.cartItems.find((x) => x.id === item.id);
        if(itemExist) {
            return {
                ...state,
                cartItems : state.cartItems.map((x) =>  x.id !== itemExist.id ? x : item )
            }
        }else{
            return {
                ...state,
                cartItems: [...state.cartItems,item]
            }
        }
        case typesActions.REMOVE_FROM_CART : 
        return {
            ...state,
            cartItems : state.cartItems.filter((x) => x.id !== action.id)
        }
        default :
        return state;
    }
}