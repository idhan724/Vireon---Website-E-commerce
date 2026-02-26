import { type CartItem } from "@/components/Cart/cartStore";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import QuantityCounter from "@/components/QuantityCounter";
import { Trash } from "lucide-react";

type CartItemProps = {
  item: CartItem;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
};

function CartItems({ item, removeFromCart, updateQuantity }: CartItemProps) {
  return (
    <Card
      key={item.id}
      className="max-w-3xl mx-auto hover:shadow-md transition-all"
    >
      <CardContent className="flex items-center gap-4 p-4">
        <img
          src={item.img}
          alt={item.alt}
          className="w-24 h-24 rounded-xl object-cover"
        />

        <div className="space-y-2">
          <h1 className="font-semibold">{item.name}</h1>
          <p className="text-lg font-bold">
            Rp {(item.price * item.quantity).toLocaleString()}
          </p>

          <QuantityCounter
            value={item.quantity}
            onChange={(value) => updateQuantity(item.id, value)}
            max={99}
          />
        </div>

        <Button
          variant="destructive"
          className="ml-auto"
          onClick={() => removeFromCart(item.id)}
        >
          <Trash />
        </Button>
      </CardContent>
    </Card>
  );
}

export default CartItems;
