import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import CartItem from '../entity/CartItem';



interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: number) => void;
  decreaseQuantity: (itemId: number) => void;
  increaseQuantity: (itemId: number) => void;
  clearCart: () => void;
}

const cartStore = devtools(
  persist<CartStore>(
    (set) => ({
      items: [],
      addItem: (item) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          } else {
            return {
              items: [item, ...state.items],
            };
          }
        });
      },

      removeItem: (itemId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        }));
      },

      decreaseQuantity: (itemId) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.id === itemId);
          if (existingItem && existingItem.quantity > 1) {
            return {
              items: state.items.map((i) =>
                i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
              ),
            };
          } else if (existingItem && existingItem.quantity === 1) {
            return {
              items: state.items.filter((item) => item.id !== itemId),
            };
          } else {
            return state;
          }
        });
      },

      increaseQuantity: (itemId) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.id === itemId);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          } else {
            return state;
          }
        });
      },

      clearCart: () => {
        set({ items: [] });
      },
    }),
    { name: 'cart-store' }
  ),
  { trace: true }
);

const useCartStore = create(cartStore);

export default useCartStore;
