import React, { useState } from "react";
import { useSignal } from "@preact/signals-react";

export const Counter: React.FC = () => {
  const count: any = useSignal(0);
  const [counting, setCounting] = useState<number>(0);
  let countingJS: number = 0;

  const increment = () => {
    count.value += 1;
    console.log("Signal Count:", count.value);
  };

  const increment2 = () => {
    setCounting((prev) => (prev += 1));
    console.log("useState Count: ", counting);
  };

  const increment3 = () => {
    countingJS = countingJS += 1;
    console.log("Javascript Count: ", countingJS);
  };

  return (
    <div>
      <h1>Counter Example</h1>
      <h4>check console.log</h4>
      <p>Signal Count: {count}</p>
      <button onClick={increment}>Increment with Signal</button>
      <hr />
      <p>useState Count: {counting}</p>
      <button onClick={increment2}>Increment with useState</button>
      <hr />
      <p>Javascript Count: {countingJS}</p>
      <button onClick={increment3}>Increment with Javascript</button>
    </div>
  );
};
