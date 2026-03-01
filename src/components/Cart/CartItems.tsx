import { type CartItem } from "@/store/cartStore";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import QuantityCounter from "@/components/QuantityCounter";
import { Trash } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

type CartItemProps = {
  item: CartItem;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  toggleSelected: (id: number) => void;
};

function CartItems({
  item,
  removeFromCart,
  updateQuantity,
  toggleSelected,
}: CartItemProps) {
  return (
    <Card
      key={item.id}
      className={`max-w-3xl mx-auto transition-all duration-300 ${item.selected ? "border-primary ring-2 ring-primary/40 bg-primary/5 shadow-lg" : "hover:shadow-md"}`}
    >
      <CardContent className="flex items-center gap-4 p-4">
        <Checkbox
          checked={item.selected}
          onCheckedChange={() => toggleSelected(item.id)}
        />
        <img
          src={item.img}
          alt={item.alt}
          className="w-24 h-24 rounded-xl object-contain object-center"
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
