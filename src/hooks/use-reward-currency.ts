import { useMemo } from "react";

export interface RewardCurrency {
  symbol: string;
  amount: number;
  display: string;
}

export function useRewardCurrency(): RewardCurrency {
  return useMemo(() => {
    const locale = typeof navigator !== "undefined" ? navigator.language : "en-US";
    const isUK = locale.toLowerCase() === "en-gb" || locale.toLowerCase().startsWith("en-gb");
    const symbol = isUK ? "£" : "$";

    return {
      symbol,
      amount: 750,
      display: `${symbol}750`,
    };
  }, []);
}
