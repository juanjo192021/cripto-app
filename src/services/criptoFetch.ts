import { useEffect, useState } from "react";
import { ICripto } from "../interface";

interface Props {
  ticker?: string;
}

export const criptoFetch = ({ ticker }: Props = { ticker: "IOTA-USD"}) => {
  const [data, setData] = useState<ICripto | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://criptomonedas.onrender.com/predict?ticker=${ticker}`
      );

      if (!response.ok) {
        throw new Error("failed");
      }

      const dataResponse: ICripto = await response.json();
      setData(dataResponse);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [ticker]);

  return {
    data,
    loading,
    error,
  };
};
