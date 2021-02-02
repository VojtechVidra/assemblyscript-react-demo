# AssemblyScript React demo

- All AssemblyScript code is placed in `assembly/index.ts`
- After you change AssemblyScript code you need to recompile with `yarn asbuild`
- When you add AS function you may as well add it's typings to `src/as-api.ts`
- AS functions are available like this:

```ts
import asApi from "./as-api";

(async () => {
  const result = (await asApi).exports.add(a, b);
})();
```
