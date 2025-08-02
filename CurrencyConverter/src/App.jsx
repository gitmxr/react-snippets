import { useState } from "react";
import bgImage from "./assets/CurrencyConverter-bg.webp";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [From, setFrom] = useState("usd");
  const [To, setTo] = useState("eur");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(From); 
  const options = currencyInfo ? Object.keys(currencyInfo) : [];
  if (options.length === 0) {
    return <div className="text-white">Loading currencies...</div>;
  }
  console.log("currencyInfo:", currencyInfo);
  console.log("From:", From, "To:", To);

  const Swap = () => {
    setFrom(To);
    setTo(From);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const Convert = () => {
    const rate = currencyInfo?.[To];
    if (rate) {
      setConvertedAmount(amount * rate);
    } else {
      setConvertedAmount(0); 
    }
  };
  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="w-full justify-center align-middle border-gray-70 backdrop-blur-3xl rounded-lg shadow-lg p-8 max-w-md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            Convert();
          }}
        >
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectedCurrency={From}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>

          <div className="relative w-full h-12 -my-6">
            <button
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-700 text-white border-2 border-white rounded-b-lg rounded-t-lg px-3 py-1"
              onClick={Swap}
            >
              Swap
            </button>
          </div>

          <div className="w-full mt-2">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={To}
              amountDisabled={true}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white px-4 py-3 rounded-lg mb-2 mt-2"
            // onClick={Convert}
          >
            Convert {From.toUpperCase()} to {To.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
