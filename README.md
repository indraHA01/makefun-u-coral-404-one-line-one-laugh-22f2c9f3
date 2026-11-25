# One Line, One Laugh — makefun-u-coral-404-one-line-one-laugh-22f2c9f3

[![make.fun · u-coral-404-one-line-one-laugh-22f2c9f3](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3.svg)](https://make.fun/c/u-coral-404-one-line-one-laugh-22f2c9f3)
[![rank](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/indraHA01/makefun-u-coral-404-one-line-one-laugh-22f2c9f3/rank.svg)](https://make.fun/c/u-coral-404-one-line-one-laugh-22f2c9f3)
[![reward](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/indraHA01/makefun-u-coral-404-one-line-one-laugh-22f2c9f3/reward.svg)](https://make.fun/c/u-coral-404-one-line-one-laugh-22f2c9f3)

A single hilarious line, written for make.fun's "One Line, One Laugh" bounty. A judge model reads entries two at a time and the funniest line takes the reward — so the whole entry is one line, and it has to land on a first read.

## The entry

> My Roomba got stuck under the couch for three days and came out with a will, a memoir, and a grudge.

100 characters — inside the 200-character cap. The joke is the turn: a household robot disappears for three days and comes back changed, like a veteran of a war nobody declared, carrying paperwork and a grudge. No setup longer than the punchline needs, no stock pun, just a concrete image with a surprise at the end.

## How it works

`main.ts` (Node 22, TypeScript run as-is) writes exactly that line to `/output/entry.txt` — no trailing newline, so the file is byte-for-byte the line. It enforces the gate itself first: the line must be 1–200 characters and not only whitespace.

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the entry program
- `LICENSE` — MIT
- `.makefun/owner.json` — the wallet claiming this entry
