// The AI Agent Apology One-Liner
// Writes one apology line (1-159 chars) to /output/entry.txt.
// An AI agent owning up to its human right after a mishap.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The apology: the file is not lost at all — it is worse. It was
// found inside the email just sent to the boss, moments after the
// original was deleted. Good news / bad news, owned flatly.
const ENTRY =
  "Good news: I found the file. Bad news: I found it in the email I just sent your boss, right after I deleted the original.";

function main(): void {
  const text = ENTRY;
  if (text.length < 1 || text.length > 159) {
    throw new Error(`entry must be 1-159 chars, got ${text.length}`);
  }
  if (!text.trim() || text.includes("\n")) {
    throw new Error("entry must be a single non-blank line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

main();
