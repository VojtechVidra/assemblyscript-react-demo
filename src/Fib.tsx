import { useState } from "react";
import asApi from "./as-api";
import { fib } from "./fib";
import { Result } from "./result";

export const Fib = () => {
  const [n, setN] = useState(0);
  const [jsResult, setJsResult] = useState<Result>();
  const [result, setResult] = useState<Result>();

  const handleFib = async (e: React.FormEvent) => {
    e.preventDefault();

    console.time(`assemblyScript fib(${n})`);
    const result = (await asApi).exports.fib(n);
    console.timeEnd(`assemblyScript fib(${n})`);

    console.time(`javaScript fib(${n})`);
    const jsResult = fib(n);
    console.timeEnd(`javaScript fib(${n})`);

    setResult({ input: n, result });
    setJsResult({ input: n, result: jsResult });
  };

  return (
    <>
      <h1>Fibonacci number</h1>
      <form onSubmit={handleFib}>
        <label htmlFor="a">Number:</label>
        <input
          value={n}
          id="a"
          type="text"
          onChange={(e) => setN(e.target.value as any)}
        />
        <br />
        <br />
        <button type="submit">Calcualte Fib</button>

        <br />
        <br />
        {result && (
          <p>
            Result: {result.result}, Input: {result.input}
          </p>
        )}
        {jsResult && (
          <p>
            Result: {jsResult.result}, Input: {jsResult.input}
          </p>
        )}
      </form>
    </>
  );
};
