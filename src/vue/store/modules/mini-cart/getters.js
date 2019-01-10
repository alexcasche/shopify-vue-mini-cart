export default {
  isOpen: state => state.isOpen,
  isFetching: state => state.isFetching,
  shoppingCart: state => state.shoppingCart,
  cartCount: state => state.shoppingCart.count,
  cartSubtotal: state => state.shoppingCart.total,
  freeShipping: state => state.freeShipping,
  estShipping: state => state.estShipping,
  errorMessage: state => state.errorMessage
};
