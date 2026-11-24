import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Funniest Out-of-Office — v3 (final): return date for realism, then the
// twist lands on the last three words: the intern does not exist.
const LINE =
  "I'm out until Monday: my inbox is in the hands of Dave, a very confident intern who does not exist.";

const chars = [...LINE].length;
if (chars < 1 || chars > 140) {
  throw new Error(`entry must be 1-140 characters, got ${chars}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
