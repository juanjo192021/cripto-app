import { ChangeEvent, useState } from "react";
import "./App.css";
// import { criptoFetch } from "./services/criptoFetch"; // Asegúrate de tener los datos de alguna manera
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { criptoFetch } from "./services/criptoFetch";


function App() {
  const [trickerValue, setTrickerValue] = useState<string>("BTC-USD");

  const onInputChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTrickerValue(e.target.value);
    console.log({ value: e.target.value });
  };

  const {data, loading} = criptoFetch({
    ticker:trickerValue
  })

  if(loading) {
    return (
      <div>CARGANDO...</div>
    )
  }

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

          {/* Verifica que el contenedor tenga espacio adecuado */}
          <div style={{ width: '100%', height: '500px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data?.data.resultados}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="predicho"
                  stroke="#8884d8"
                  activeDot={{ r: 4 }}
                />
                <Line type="monotone" dataKey="real" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
