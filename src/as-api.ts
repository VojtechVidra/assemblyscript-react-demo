import { instantiateStreaming } from "assemblyscript/lib/loader";

interface API {
  add(a: number, b: number): number;
  fib(n: number): number;
}

const imports: any = {};

// @ts-ignore
export default instantiateStreaming<API>(fetch("./as-api.wasm"), imports);
