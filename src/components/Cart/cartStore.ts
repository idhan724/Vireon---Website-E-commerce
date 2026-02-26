import { create } from "zustand";
import type { ProductDataProps } from "../Product/productData";

type CartItem = ProductDataProps & {
    quantity: number
}

type CartStore = {
    cart: CartItem[];
    addToCart: (product: ProductDataProps, quantity:number) => void;
    removeFromCart: (id:number) => void
    updateQuantity: (id:number, quantity:number) => void
}

export const useCartStore = create<CartStore>((set) => ({
    cart: [],
    addToCart: (product, quantity) => set((state) => {
        const existing = state.cart.find((i) => i.id === product.id);

        if(existing) {
            return {
                cart: state.cart.map((i) => i.id === product.id ? {...i, quantity:i.quantity + quantity} : i),
            }
        }
        return {
            cart: [...state.cart, {...product, quantity}]
        }
    }),
    removeFromCart: (id) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== id)
    })),
    updateQuantity: (id, quantity) => set((state) => ({
        cart: state.cart.map((item) => item.id === id ? {...item, quantity} : item)
    }))

}))
