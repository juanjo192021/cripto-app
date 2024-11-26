import { ChangeEvent, useState } from "react";
import "./App.css";
import { criptoFetch } from "./services/criptoFetch";
import { AreaRange } from "./AreaRange";

function App() {
  const [trickerValue, setTrickerValue] = useState<string>("BTC-USD");

  const onInputChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTrickerValue(e.target.value);
    console.log({ value: e.target.value });
  };

  const { data, loading } = criptoFetch({
    ticker: trickerValue,
  });

  console.log({ data });

  return (
    <main>
      <section>
        <div className="container mx-auto">
          <div className="flex">
            <select
              name="tricker"
              className="px-[15px] py-[5px] rounded-lg border-2 border-gray-500 w-40"
              onChange={onInputChange}
            >
              <option value="BTC-USD">Bitcoin</option>
              <option value="ETH-USD">Ethereum</option>
              <option value="ADA-USD">Cardano</option>
              <option value="IOTA-USD">Iota</option>
              <option value="SOL-USD">Solana</option>
              <option value="BNB-USD">Binance</option>
            </select>
          </div>

          {loading ? (
            <div>Cargando...</div>
          ) : (
            <>
              <div className="flex gap-x-2">
                <span>{`La prediccion para el ${data?.data?.prediccion_adicional?.fecha || ""} es de:`}</span>
                <span>{data?.data?.prediccion_adicional?.valor}</span>
              </div>
              <div style={{ width: "100%", height: "500px" }}>
                {data?.data.resultados && (
                  <AreaRange
                    data={data.data.resultados as [number, number, number][]}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
