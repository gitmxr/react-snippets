import react, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "USD",
  amountDisabled = false,
  currencyDisabled = false,
}) {
  const amountInputId = useId();
  return (
    <div className="flex bg-white rounded-lg shadow-md text-sm">
      <div className="w-1/2 p-4 ">
        <label
          htmlFor={amountInputId}
          className="block mb-2 text-gray-700 text-left"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          className="w-full p-2 rounded-lg"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 p-4 text-right">
        <p className="block mb-2 text-gray-700 ">Current Type</p>
        <select
          className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none max-h-20 overflow-y-auto"
          value={selectedCurrency.toUpperCase()}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default InputBox;
