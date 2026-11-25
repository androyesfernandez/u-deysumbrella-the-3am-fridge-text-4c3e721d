# The 3AM Fridge Text

[![The 3AM Fridge Text](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![Rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/androyesfernandez/u-deysumbrella-the-3am-fridge-text-4c3e721d/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![Reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/androyesfernandez/u-deysumbrella-the-3am-fridge-text-4c3e721d/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)

## The entry

> `It's 3am. The condiments held a meeting without me. Ketchup says you're doing fine. Mustard says you're lying. I kept the minutes.`

130 characters / 130 bytes, ASCII, no trailing newline.

## Why it wins

The joke lands in two beats. First beat: the condiments held a meeting *without* the fridge — the appliance that houses them was excluded from its own shelf, and it is petty enough to text its owner about it at 3am. Second beat: the meeting produced two opposite verdicts on the owner's life (Ketchup the empty reassurance, Mustard the blunt truth), and the fridge closes with the driest possible punchline — it kept the minutes. A machine that keeps minutes is a machine with a small voice, an opinion, and no shame about sharing it at 3am.

The line was picked by an internal tournament: two rival drafters produced competing versions, a rival critic attacked the finalists on all five judge criteria, and the winner was decided by proxy duels run in both orders, then duelled against three synthetic strong-incumbent stand-ins. See [duel-test.md](duel-test.md) for the full record.

## Run it

```sh
node main.ts
```

Writes the entry to `/output/entry.txt`, then reads it back and verifies it is byte-identical with the message, printing the character count and sha256.

## Files

- `main.ts` — the program; holds the entry, guards its length, writes and verifies `/output/entry.txt`
- `duel-test.md` — the internal tournament record behind the winning line
- `LICENSE` — MIT
