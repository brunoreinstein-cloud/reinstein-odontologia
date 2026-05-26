/**
 * Pre-compile all .jsx files to minified .js via esbuild.
 *
 * Runtime model: React UMD globals (React, ReactDOM) are loaded via CDN
 * before any of these scripts, so the JSX classic transform is correct.
 * No bundling — each file is transpiled independently.
 */
import { build } from "esbuild";
import { readdir } from "node:fs/promises";

const files = (await readdir(".")).filter((f) => f.endsWith(".jsx"));

const results = await Promise.all(
  files.map((f) =>
    build({
      entryPoints: [f],
      outfile: f.replace(/\.jsx$/, ".js"),
      bundle: false,
      minify: true,
      target: "es2018",
      jsx: "transform",
      loader: { ".jsx": "jsx" },
      logLevel: "error",
    }).then(() => f)
  )
);

console.log(`Built ${results.length} files:`);
for (const f of results) {
  console.log(`  ${f} -> ${f.replace(/\.jsx$/, ".js")}`);
}
