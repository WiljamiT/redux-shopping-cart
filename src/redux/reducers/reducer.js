const storeReducer = (state = { products:[], shoppingCart: [], loading: true }, action) => {
  switch (action.type) {
    case 'ADD_PRODUCTS': 
      return {  
        ...state, 
        products: action.products,
        loading: false 
      }
    case 'ADD_TO_CART': 
      return {  
        ...state, 
        shoppingCart: [...state.shoppingCart, action.product] 
      }
    case 'REMOVE_FROM_CART': 
      const updatedShoppingCart = state.shoppingCart.filter((product, index) => index !== action.index)
      return {
        ...state, 
        shoppingCart: updatedShoppingCart
      }
    default: return state;
  }
}

export default storeReducer;