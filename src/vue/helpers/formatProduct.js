export const formatProduct = shopifyProduct => {
  return {
    [shopifyProduct.variant_id]: {
      id: shopifyProduct.variant_id,
      image: shopifyProduct.image,
      price: shopifyProduct.price,
      quantity: shopifyProduct.quantity,
      title: shopifyProduct.product_title,
      variant: shopifyProduct.variant_title
    }
  };
};
