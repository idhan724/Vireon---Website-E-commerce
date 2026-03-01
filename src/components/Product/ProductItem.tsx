import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import QuantityCounter from "@/components/QuantityCounter";
import { Plus, ShoppingCart } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import * as React from "react";
import { useCartStore } from "@/store/cartStore";
import type { ProductDataProps } from "@/components/Product/productData";

type ProductItemProps = {
  item: ProductDataProps;
};

function ProductItem({ item }: ProductItemProps) {
  const [quantity, setQuantity] = React.useState(1);
  const [showMessage, setShowMessage] = React.useState(false);
  const addToCart = useCartStore((state) => state.addToCart);
  const formatRupiah = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  };
  const handleAdd = () => {
    addToCart(item, quantity);

    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };
  return (
    <Card className="@container/card">
      <img
        src={item.img}
        alt={item.alt}
        className="z-20 aspect-video w-full object-contain"
      />
      <CardHeader>
        <CardTitle>{item.name}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <CardTitle>{formatRupiah(item.price)}</CardTitle>
        <CardDescription>Quantity: {item.stock}</CardDescription>
      </CardContent>
      <CardFooter className="relative justify-between">
        <QuantityCounter
          value={quantity}
          onChange={setQuantity}
          max={item.stock}
        />
        {showMessage && (
          <p className="absolute -bottom-8 right-12 translate-x-1/4 text-sm bg-green-600 text-white font-medium px-2 py-1 rounded-3xl">
            Ditambahkan Ke keranjang
          </p>
        )}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button onClick={handleAdd} disabled={item.stock === 0}>
                <div className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  <Plus className="w-3 h-3 absolute -top-1.5 -right-2 bg-background rounded-full" />
                </div>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Tambahkan ke keranjang</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
}

export default ProductItem;
