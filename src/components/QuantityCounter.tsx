import * as React from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import { Input } from "./ui/input";

type QuantityCounterProps = {
  value: number;
  onChange: (value: number) => void;
  max?: number;
  min?: number;
};

function QuantityCounter({
  value,
  onChange,
  max = 99,
  min = 1,
}: QuantityCounterProps) {
  const increment = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const decrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const NewValue = Number(e.target.value);

    if (isNaN(NewValue)) return;

    if (NewValue < min) {
      onChange(min);
    } else if (NewValue > max) {
      onChange(max);
    } else {
      onChange(NewValue);
    }
  };
  return (
    <div className="flex items-center gap-2">
      <Button onClick={decrement} disabled={value <= min}>
        <Minus />
      </Button>
      <Input
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        className="w-12 text-center font-medium"
      />
      <Button onClick={increment} disabled={value >= max}>
        <Plus />
      </Button>
    </div>
  );
}

export default QuantityCounter;
