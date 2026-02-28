import { productData } from "@/components/Product/productData";
import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductItem from "@/components/Product/ProductItem";
import { useSearchStore } from "@/store/searchStore";

function ProductCards() {
  type FilterProps = "all" | "tech" | "fashion" | "home & living";
  const [filter, setFilter] = React.useState<FilterProps>("all");
  const search = useSearchStore((state) => state.search);

  const filteredProductData = React.useMemo(() => {
    let data = [...productData];

    if (filter !== "all") {
      data = data.filter((i) => i.category.toLowerCase() === filter);
    }

    if (search.trim() !== "") {
      data = data.filter((i) =>
        i.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    return data;
  }, [search, filter]);
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
              <ProductItem key={i.id} item={i} />
            ))}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default ProductCards;
