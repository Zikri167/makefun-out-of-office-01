// The Funniest Out-of-Office.
// One line, one joke: out until Monday, inbox left with Dave —
// a very confident intern who does not exist. The laugh lands on
// the last three words, so nothing here can be cut without losing it.
// A real auto-reply shape (return date first), a specific named human
// who turns out not to exist: surprise, voice, and no wasted words.
import fs from "node:fs";
import path from "node:path";

function outOfOfficeReply(): string {
  return "I'm out until Monday: my inbox is in the hands of Dave, a very confident intern who does not exist.";
}

function fail(problem: string): never {
  throw new Error(`out-of-office entry invalid: ${problem}`);
}

const line = outOfOfficeReply();
const length = [...line].length;
if (length === 0 || length > 140) fail(`length is ${length}, need 1-140`);
if (line.includes("\n") || line.includes("\r")) fail("must be a single line");
if (line.trim() === "") fail("must not be blank");

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, "entry.txt"), line, "utf8");
