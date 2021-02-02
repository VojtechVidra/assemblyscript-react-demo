import { useState } from "react";
import asApi from "./as-api";

export const Add = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = (await asApi).exports.add(
      parseInt(a.toString()),
      parseInt(b.toString())
    );

    console.log(result);
  };

  return (
    <>
      <h1>Add two numbers</h1>
      <form onSubmit={handleAdd}>
        <label htmlFor="a">A:</label>
        <input
          value={a}
          id="a"
          type="text"
          onChange={(e) => setA(e.target.value as any)}
        />
        <br />
        <br />
        <label htmlFor="b">B:</label>
        <input
          value={b}
          id="b"
          type="text"
          onChange={(e) => setB(e.target.value as any)}
        />
        <br />
        <br />
        <button type="submit">Add</button>
      </form>
    </>
  );
};
