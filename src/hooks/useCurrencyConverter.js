import { useEffect, useState } from "react";

function useCurrencyConverter(amount, from, to, currencyInfo) {
  const [convertedAmount, setConvertedAmount] = useState(0);
  useEffect(() => {
    setConvertedAmount(amount * currencyInfo[to])
  }, [amount,from, to, currencyInfo]);
  return convertedAmount;
}

export default useCurrencyConverter