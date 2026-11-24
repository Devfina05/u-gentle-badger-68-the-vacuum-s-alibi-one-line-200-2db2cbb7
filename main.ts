// The Vacuum's Alibi — make.fun program/v1 entry (Node, standard library only).
//
// Writes one line to /output/entry.txt: the excuse a robot vacuum gives for
// missing a spot. Outside the grader's container, MAKEFUN_OUTPUT_DIR stands
// in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The line was written for the judge's brief: deadpan machine voice first,
// then a surprise turn, then the punch on the last word. Drafts I rejected:
// a "the cat did it" blame-shift (no surprise), a battery excuse (stock
// appliance joke), and a crumbs-are-a-rug gag (the rug line lands soft).
// The keeper is the labour-dispute version: sensors report a fact, the
// vacuum honours a picket line it invented, and the warranty line closes
// it deadpan. Every word earns its place; the punch sits at the end.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'Per my sensors, the dust in that corner has unionised, so I am honouring the picket line. My warranty does not cover labour disputes.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outPath = join(outDir, 'entry.txt');

// The gate counts Unicode code points, not bytes: enforce the 200-character
// cap here so a future edit to the line fails loudly instead of silently
// submitting an invalid entry.
if ([...LINE].length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `entry must be 1-200 characters, got ${[...LINE].length}`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, LINE, 'utf8');
