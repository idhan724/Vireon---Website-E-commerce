import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import QuantityCounter from "@/components/QuantityCounter";
import { Trash } from "lucide-react";
import { useCartStore } from "@/components/Cart/cartStore";

export default function CartCards() {
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  const subTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = 20000;
  const total = subTotal + shipping;

  return (
    <div className="grid grid-cols-3 max-w-7xl mx-auto my-25 items-start">
      <div className="space-y-3 col-span-2">
        {cart.length === 0 && (
          <p className="text-center text-muted-foreground">
            Keranjang Masih Kosong
          </p>
        )}

        {cart.map((item) => (
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
        ))}
      </div>

      <Card className="w-full max-w-md shadow-lg col-span-1">
        <CardHeader>
          <CardTitle className="text-xl">Order Summary</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>Rp{subTotal.toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>Rp{shipping.toLocaleString()}</span>
          </div>

          <div className="border-t pt-4 flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>Rp{total.toLocaleString()}</span>
          </div>

          <Button className="w-full mt-4">Proceed to Payment</Button>
        </CardContent>
      </Card>
    </div>
  );
}
