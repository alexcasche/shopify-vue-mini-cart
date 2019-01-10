export const formatCart = shopifyCart => {
  const cartInfo = {
    count: shopifyCart.item_count,
    total: (shopifyCart.total_price / 100).toFixed(2),
    note: shopifyCart.note
  };
  let cartItemsObj = {};
  shopifyCart.items.forEach(itemObj => {
    cartItemsObj[itemObj.variant_id] = {
      frequency: itemObj.variant_options[0],
      type: itemObj.variant_options[1],
      id: itemObj.variant_id,
      title: itemObj.product_title,
      variant: itemObj.variant_title,
      image: itemObj.image,
      price: itemObj.price,
      quantity: itemObj.quantity
    };
  });
  return {
    ...cartInfo,
    items: cartItemsObj
  };
};
