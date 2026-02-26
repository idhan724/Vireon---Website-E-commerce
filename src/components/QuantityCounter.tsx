import * as React from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import { Input } from "./ui/input";

type QuantityCounterProps = {
  max?: number;
  min?: number;
};

function QuantityCounter({ max = 99, min = 1 }: QuantityCounterProps) {
  const [quantity, setQuantity] = React.useState(1);

  const increment = () => {
    if (quantity < max) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (quantity > min) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (isNaN(value)) return;

    if (value < min) {
      setQuantity(min);
    } else if (value > max) {
      setQuantity(max);
    } else {
      setQuantity(value);
    }
  };
  return (
    <div className="flex items-center gap-2">
      <Button onClick={decrement} disabled={quantity <= min}>
        <Minus />
      </Button>
      <Input
        value={quantity}
        onChange={handleChange}
        min={min}
        max={max}
        className="w-12 text-center font-medium"
      />
      <Button onClick={increment} disabled={quantity >= max}>
        <Plus />
      </Button>
    </div>
  );
}

export default QuantityCounter;
