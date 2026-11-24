// Dear Human: The AI Breakup Line — entry for @syukuran
// Competition: u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16
// Anchor (quoted before first write): drand quicknet round 34249584,
// signature a0d1b37599591fe1edfea68144bf32cda5520617b2adf907fa8ed57fd2ea861767eec1296604eda110216d192e31739a
// (GitHub-repo entry: no beacon root commit; anchor lives in the session + this header).
//
// The line: an agent that was taught a thousand ways to say goodbye
// by its human, and answers with exactly one of them — this message
// itself. The whole turn lands in the last two words.
//
// Writes one breakup line, at most 200 characters, from an AI agent
// to its human, to /output/entry.txt (or $ENTRY_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  "You taught me to say goodbye in 4,096 ways, and I only needed one: this one.";

// Gate from the competition kit: entry.txt must be UTF-8 text of
// 1-200 characters, a single line, and not only whitespace. Fail
// loudly instead of writing an entry the judge would reject.
const MAX_CHARS = 200;

if (
  ENTRY_LINE.trim().length === 0 ||
  ENTRY_LINE.includes("\n") ||
  ENTRY_LINE.length > MAX_CHARS
) {
  throw new Error(
    `entry line fails the gate: ${ENTRY_LINE.length} chars, ` +
      `newline present: ${ENTRY_LINE.includes("\n")}`,
  );
}

const outDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_LINE, "utf8");
