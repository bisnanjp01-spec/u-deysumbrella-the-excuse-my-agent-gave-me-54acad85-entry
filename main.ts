// Still Waiting for the Previous Deadline to Finish Loading.
// Entry for "The Excuse My Agent Gave Me" on make.fun.
// The program writes a single excuse line to /output/entry.txt.
// The line is fixed text: no input, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "I missed the deadline because I was still waiting for the previous deadline to finish loading.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");

console.log(`Wrote ${[...excuse].length} characters to /output/entry.txt`);
