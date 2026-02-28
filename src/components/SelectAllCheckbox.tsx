import { useCartStore } from "@/store/cartStore";
import { Checkbox } from "@/components/ui/checkbox";

function SelectAllCheckbox() {
  const { cart, toggleSelectAll } = useCartStore();

  const allSelected = cart.length > 0 && cart.every((item) => item.selected);
  return (
    <div className="flex items-center gap-2 max-w-3xl mx-auto mb-4">
      <Checkbox checked={allSelected} onCheckedChange={toggleSelectAll} />
      <span className="font-medium">Pilih Semua ({cart.length})</span>
    </div>
  );
}

export default SelectAllCheckbox;
