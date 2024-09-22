import { createContext, PropsWithChildren, useContext, useState } from "react";
import { CartItem, Product } from "@/src/types";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
};

const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, size: CartItem["size"]) => {
    //TODO if already in cart, increment the quantity
    //console.log(product);
    const newCartItem: CartItem = {
      id: "1", //TODO generate the id
      product,
      product_id: product.id,
      size,
      quantity: 1,
    };

    setItems([newCartItem, ...items]);
  };

  //TODO updateQuantity

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

//! Custom hook to export useContext and own context
export const useCart = () => useContext(CartContext);
