// The 3AM Fridge Text — make.fun micro entry
// The program writes one line to /output/entry.txt: the text message
// a smart fridge sends its owner at 3am. No network, no dependencies.
// Run with: node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

// The entry: the condiments held a meeting without the fridge, and the
// fridge kept the minutes. Picked by an internal duel tournament —
// two rival drafters, a rival critic, proxy duels in both orders
// against the other finalists (see duel-test.md). Tournament winner
// with mean game score 0.75 across six games; the rival critic
// attacked it on all five judge criteria and ruled it stands.
const ENTRY =
  "It's 3am. The condiments held a meeting without me. Ketchup says you're doing fine. Mustard says you're lying. I kept the minutes.";

// The gate allows 1-140 characters of UTF-8, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
// One line of a text message: no embedded newline may ever slip in.
if (/[\r\n]/.test(ENTRY)) {
  throw new Error("entry must be a single line");
}

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

mkdirSync(OUT_DIR, { recursive: true });

// No trailing newline: the file is exactly the message, byte for byte.
writeFileSync(OUT_FILE, ENTRY, "utf8");

// Read back and confirm the file matches the entry exactly.
const roundTrip = readFileSync(OUT_FILE, "utf8");
if (roundTrip !== ENTRY) {
  throw new Error("verification failed: /output/entry.txt does not match the entry");
}

const bytes = Buffer.byteLength(ENTRY, "utf8");
const sha256 = createHash("sha256").update(ENTRY, "utf8").digest("hex");

console.log(`chars: ${ENTRY.length}`);
console.log(`bytes: ${bytes}`);
console.log(`sha256: ${sha256}`);
console.log(`wrote ${OUT_FILE}`);
