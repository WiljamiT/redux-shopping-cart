export const addProducts = (products) => ({
    type: 'ADD_PRODUCTS', products: products
})

export const addToCart = (product) => ({
    type: 'ADD_TO_CART', product: product
})

export const removeFromCart = (index) => ({
    type: 'REMOVE_FROM_CART', index: index
})