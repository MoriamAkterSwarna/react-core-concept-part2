import { useState } from "react";

export default function Counter() {
  // const abc = useState(50);
  // console.log(abc);

  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div style={{ border: "2px solid red", padding: "10px", margin: "10px" }}>
      <h1>Counter: {count} </h1>
      <button onClick={handleAdd}>Add</button>

      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
