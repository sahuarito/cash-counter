import { useState } from "react";

function useCounter() {
  const [denominations, setDenominations] = useState(new Map());
  const getTotal = () => {
    return Array.from(denominations.entries()).reduce(
      (acc, [denomination, count]) => {
        const subtotal = denomination * count;
        return acc + subtotal
      },
      0
    );
  };
  return [denominations, setDenominations, getTotal()];
}

export default useCounter;
