import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { Link, useLocation } from "react-router-dom";
import * as React from "react";

type NavbarProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

function Navbar({ search, setSearch }: NavbarProps) {
  const location = useLocation();

  const isCheckoutPage = location.pathname === "/checkout";
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-semibold text-blue-400">
            Vireon
          </a>

          {!isCheckoutPage && (
            <Field orientation="horizontal" className="max-w-3xl">
              <Input
                type="search"
                placeholder="Cari Produk..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button>
                <Search />
              </Button>
            </Field>
          )}

          <div className="flex gap-3 items-center">
            <ThemeToggle />
            <Link to="/checkout">
              <Button>
                <ShoppingCart />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
