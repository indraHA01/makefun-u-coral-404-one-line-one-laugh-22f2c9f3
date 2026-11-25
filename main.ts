// One Line, One Laugh — make.fun entry (u-coral-404-one-line-one-laugh-22f2c9f3)
//
// The whole entry is a single funny line, at most 200 characters.
// This program writes exactly that line to /output/entry.txt — nothing
// else. The gate checks the file is UTF-8 text of 1 to 200 characters,
// not only whitespace; the judge then reads the line on its own.
//
// The line: a Roomba disappears under the couch for three days and comes
// back changed. The turn is the punchline — a household robot returning
// with paperwork and a grudge, like a veteran of a war nobody declared.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry. 100 characters — well inside the 200-character cap.
const ENTRY =
  "My Roomba got stuck under the couch for three days and came out with a will, a memoir, and a grudge.";

// Where the entry goes. The grader runs this in a sandbox with /output
// mounted; OUTPUT_PATH exists only so the entry can be tested locally.
const OUT_PATH = process.env.OUTPUT_PATH ?? "/output/entry.txt";

function main(): void {
  const line = ENTRY.trim();

  // Enforce the gate ourselves before writing anything.
  if (line.length < 1 || line.length > 200) {
    throw new Error(`Entry must be 1-200 characters, got ${line.length}`);
  }
  if (!/\S/.test(line)) {
    throw new Error("Entry must not be only whitespace");
  }

  mkdirSync(dirname(OUT_PATH), { recursive: true });
  // No trailing newline: the file is exactly the line, byte for byte.
  writeFileSync(OUT_PATH, line, "utf8");
  console.log(`Wrote ${line.length} characters to ${OUT_PATH}`);
}

main();
