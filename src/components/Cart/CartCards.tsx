import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import CartItems from "@/components/Cart/CartItems";
import SelectAllCheckbox from "@/components/SelectAllCheckbox";

export default function CartCards() {
  const cart = useCartStore((state) => state.cart);
  useCartStore();

  const selectedItems = cart.filter((item) => item.selected);

  const subTotal = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = cart.length === 0 || subTotal === 0 ? 0 : subTotal * 0.03;
  const total = subTotal + shipping;

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto px-3 my-25 items-start gap-5">
      <div className="space-y-3 md:col-span-2">
        {cart.length === 0 && (
          <p className="text-center text-muted-foreground">
            Keranjang Masih Kosong
          </p>
        )}

        <SelectAllCheckbox />
        {cart.map((item) => (
          <CartItems item={item} key={item.id} />
        ))}
      </div>
      <Card className="w-full shadow-lg md:col-span-1">
        <CardHeader>
          <CardTitle className="text-xl">Order Summary</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>Rp.{subTotal.toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>Rp.{shipping.toLocaleString()}</span>
          </div>

          <div className="border-t pt-4 flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>Rp.{total.toLocaleString()}</span>
          </div>

          <Button className="w-full mt-4">Proceed to Payment</Button>
        </CardContent>
      </Card>
    </div>
  );
}
