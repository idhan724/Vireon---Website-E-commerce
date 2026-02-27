import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import ProductCards from "@/components/Product/ProductCards";
import * as React from "react";

function Home() {
  const [search, setSearch] = React.useState("");
  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <Banner />
      <ProductCards search={search} />
    </>
  );
}

export default Home;
