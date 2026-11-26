import { useMemo, useState } from "react";
import BookingCalculator from "../component/BookingCalculator";

const prices = [5000, 8000, 12000, 15000];

function BookingCalculator() {
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    console.log("Calculating total...");
    return prices.reduce((sum, price) => sum + price, 0);
  }, [prices]);

  return (
    <div>
      <h2>LensCraft Booking Calculator</h2>

      <p>Total: Rs. {result}</p>
      <p>Counter: {count}</p>

      <button onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>
    </div>
  );
}

export default BookingCalculator;