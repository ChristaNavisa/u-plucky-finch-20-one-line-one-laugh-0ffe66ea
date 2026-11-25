import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The photocopier jammed, then printed its own resignation letter.";

// Self-gate: the competition gate requires UTF-8 text of 1 to 200
// characters, not only white space, and the task is a single line.
const length = [...ENTRY].length;
if (
  length < 1 ||
  length > 200 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  console.error(`entry invalid: ${length} characters`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the gate counts every character.
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
