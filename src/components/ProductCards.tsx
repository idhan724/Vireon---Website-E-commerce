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
import { productData } from "@/lib/productData";
import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ProductCards() {
  type FilterProps = "all" | "tech" | "fashion" | "home & living";
  const [filter, setFilter] = React.useState<FilterProps>("all");
  const formatRupiah = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  };

  const filteredProductData = React.useMemo(() => {
    let data = [...productData];

    if (filter !== "all") {
      data = data.filter((i) => i.category.toLowerCase() === filter);
    }

    return data;
  }, [filter]);
  return (
    <Tabs
      defaultValue="all"
      onValueChange={(val) => setFilter(val as FilterProps)}
      className="w-full"
    >
      <TabsList className="mx-6">
        <TabsTrigger value="all">Lihat Semua</TabsTrigger>
        <TabsTrigger value="tech">Teknologi</TabsTrigger>
        <TabsTrigger value="fashion">Fashion</TabsTrigger>
        <TabsTrigger value="home & living">Peralatan Rumahan</TabsTrigger>
      </TabsList>

      <TabsContent value={filter}>
        <div className="@container/main mx-auto p-4">
          <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
            {filteredProductData.map((i) => (
              <Card className="@container/card" key={i.id}>
                <img
                  src={i.img}
                  alt={i.alt}
                  className="z-20 aspect-video w-full object-cover object-center"
                />
                <CardHeader>
                  <CardTitle>{i.name}</CardTitle>
                  <CardDescription>{i.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <CardTitle>{formatRupiah(i.price)}</CardTitle>
                  <CardDescription>Quantity: {i.stock}</CardDescription>
                </CardContent>
                <CardFooter className="justify-between">
                  <QuantityCounter max={i.stock} />
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Button>
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
            ))}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default ProductCards;
