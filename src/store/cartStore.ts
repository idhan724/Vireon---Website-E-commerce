import { create } from "zustand";
import {persist} from "zustand/middleware"
import type { ProductDataProps } from "../components/Product/productData";

export type CartItem = ProductDataProps & {
    quantity: number
    selected:boolean
}

type CartStore = {
    cart: CartItem[];
    addToCart: (product: ProductDataProps, quantity:number) => void;
    removeFromCart: (id:number) => void
    updateQuantity: (id:number, quantity:number) => void
    toggleSelected: (id:number) => void
    toggleSelectAll: () => void
}

export const useCartStore = create<CartStore>()(
    persist((set) => ({
    cart: [],
    addToCart: (product, quantity) => set((state) => {
        const existing = state.cart.find((i) => i.id === product.id);

        if(existing) {
            return {
                cart: state.cart.map((i) => i.id === product.id ? {...i, quantity:i.quantity + quantity} : i),
            }
        }
        return {
            cart: [...state.cart, {...product, quantity, selected:false}]
        }
    }),
    removeFromCart: (id) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== id)
    })),
    updateQuantity: (id, quantity) => set((state) => ({
        cart: state.cart.map((item) => item.id === id ? {...item, quantity} : item)
    })),
    toggleSelected: (id) => set((state) => ({
        cart: state.cart.map((item) => item.id === id ? {...item, selected: !item.selected} : item)
    })),
    toggleSelectAll:() => set((state) => {
        const allSelected = state.cart.length > 0 && state.cart.every((item) => item.selected)

        return {
            cart: state.cart.map((item) => ({...item, selected: !allSelected}))
        }
    })

}), {
    name:"cart-storage",
    partialize: (state) => ({
        cart: state.cart
    })
})
)
