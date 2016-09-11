export const getProduct = (state, id) => state.productList.data.find(product => product.id === id);
