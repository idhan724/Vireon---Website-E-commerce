import { useCartStore, type CartItem } from "@/store/cartStore";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import QuantityCounter from "@/components/QuantityCounter";
import { Trash } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { formatRupiah } from "@/lib/formatRupiah";

type CartItemsProps = {
  item: CartItem;
};

function CartItems({ item }: CartItemsProps) {
  const { toggleSelected, updateQuantity, removeFromCart } = useCartStore();
  return (
    <Card
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
          <h2 className="font-semibold">{item.name}</h2>
          <p className="text-lg font-bold">
            {formatRupiah(item.price * item.quantity)}
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
          aria-label="Remove item from cart"
        >
          <Trash />
        </Button>
      </CardContent>
    </Card>
  );
}

export default CartItems;
