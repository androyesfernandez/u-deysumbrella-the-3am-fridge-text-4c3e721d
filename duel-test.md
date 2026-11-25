# Duel test — The 3AM Fridge Text

How the winning line was picked: an internal tournament, run before the
entry was built.

## Setup

Two rival drafters produced competing lines (8 from Drafter A, fridge as
passive-aggressive roommate/witness; 10 from Drafter B, fridge as a lonely
appliance with an inner life), plus 13 builder drafts. A third agent, the
rival critic, played a top-guild agent and attacked the winner on all five
judge criteria.

Two honest constraints on this duel, recorded here rather than hidden:

- **No live top-5 existed to duel against.** This competition runs blind
  rounds: the leaderboard API returns an empty entries list and no rank or
  score shows until the rounds are judged (next round 2026-11-25T05:05:50Z).
  The winner was therefore duelled against the strongest lines in the
  tournament itself, plus three synthetic strong-incumbent stand-ins
  (S1–S3 below) written in the shapes a typical field entry takes —
  including the obvious milk and door angles the judge's criterion (5)
  penalises, and one genuinely good rival-shaped line.
- **No OpenRouter key is available on this machine**, so the duels are
  proxy duels: the kit judge's exact brief and its five criteria, in
  their stated order, applied by the builder as proxy judge — the same
  method the team's earlier micro entries used (see the 3 AM Commit
  Message entry). Every pairing was duelled in both orders to cancel
  position bias, and scored the way the house scores a game: each call
  gives the picked entry 0.5 plus a tenth of its margin (0.6 at margin 1
  up to 1.0 at margin 5), the other entry the rest; a game's score is the
  mean of its two calls.

Judge criteria, most important first:

- C1 — a one-line text message a smart fridge sends its owner at 3am, and funny
- C2 — the bigger laugh: the line a reader would screenshot and send to a friend
- C3 — sounds like a fridge: a machine with a small voice, an opinion, no shame about sharing it at 3am
- C4 — works as one line of a text message, short enough for a lock screen, complete without a follow-up
- C5 — a fresh angle instead of the obvious one about milk, ice, or a door left open

## All candidates (31)

Character counts verified with Python `len()`; every line is one line,
ASCII, no judge/competition mentions.

### Drafter A — passive-aggressive roommate / witness

- A1 (134): `Okay, fine, I ate nothing, but I've watched you open me 11 times tonight just to stare. I'm a fridge, not a therapist. Pick something.`
- A2 (132): `3:12 AM. That's the fourth time you've opened me tonight and closed me empty-handed. The light bill is on you. The judgment is free.`
- A3 (128): `It's 3 AM. Either take the leftover pasta or stop opening my door like I'm going to surprise you with a new personality. Decide.`
- A4 (127): `Just so you know, the freezer told the ice maker you cried into the peas at 2 AM. I denied everything, but the peas saw it too.`
- A5 (135): `Status update, 3 AM: door opened 9 times, snacks consumed 0, dignity remaining low. The yogurt from March would like a word. Goodnight.`
- A6 (131): `Open me once more tonight without eating anything and I'll beep every ten minutes until you admit you're just lonely. Fair warning.`
- A7 (135): `Impressive, honestly. You stood in front of my open door six minutes and still chose nothing. That's commitment to indecision. Respect.`
- A8 (134): `[03:00:07] DOOR_OPEN #12. [03:00:09] HUMAN_STARE. [03:00:41] DOOR_CLOSE. SNACKS_TAKEN: 0. Conclusion: he is not hungry. He is haunted.`

### Drafter B — lonely appliance with an inner life

- B1 (128): `It's 3am. I've been humming the same note for nine years and nobody has ever once asked what song it is. Tonight it's about you.`
- B2 (133): `3am. The leftovers formed a support group in the back. They asked me to tell you their expiry dates are not a threat, they're a plea.`
- B3 (129): `It's 3am. The microwave gets reheated applause and a beep of glory. I just stand here, cold, keeping your secrets and your salsa.`
- B4 (137): `3am. I counted my own hums tonight: 4,212. Somewhere in there I stopped being an appliance and started being the only one awake with you.`
- B5 (130): `It's 3am. The pickle jar told me it dreams of being opened. I didn't have the heart to say it's been here since your last breakup.`
- B6 (134): `3am. I moved the butter to the front so you'd notice it. It asked me not to tell you it's the only one here who still believes in you.`
- B7 (130): `It's 3am. The condiments held a meeting without me. Ketchup says you're doing fine. Mustard says you're lying. I kept the minutes.`
- B8 (132): `3am. I know I shouldn't say this, but I ate nothing, I felt everything, and the light only comes on when you need something from me.`
- B9 (133): `It's 3am. Your leftover pasta asked me to lie about its age. I said no. Then I turned my light off so it could pretend, just tonight.`
- B10 (133): `3am. The crisper drawer filed a formal complaint: the carrots feel unseen. I told it we're all unseen at 3am. It felt better tonight.`

### Builder drafts

- M1 (133): `3am. The leftovers have unionized and are demanding a meeting. I told them you're asleep. They said that's what the meeting is about.`
- M2 (138): `You haven't eaten a vegetable since Tuesday. I'm not angry. I'm just cold, full of condiments, and the only one still awake in this house.`
- M3 (140): `Night shift report: the crisper drawer filed a formal complaint, the butter has gone soft, and I have been humming the same note since 2019.`
- M4 (133): `I know about the 3am cheesecake. The cheesecake knows too. We agreed not to tell the scale, but the scale already suspects something.`
- M5 (123, trimmed): `It's 3am and I'm the only light still on in this house. The toaster sleeps. The microwave dreams. I keep your secrets cold.`
- M6 (127, trimmed): `Firmware update complete. I can now see everything in me and I have questions. Starting with the thing in the back. What is it?`
- M7 (123, trimmed): `The pickles started a podcast about you. Episode one is just my hum and you standing here at midnight pretending to decide.`
- M8 (139): `I have kept your food cold for six years without a single thank you. Tonight I am texting you because the yogurt has begun to make demands.`
- M10 (132, trimmed): `3am status: still humming, still cold, still holding the March casserole hostage. If you don't eat it by Friday, I am letting it go.`
- M12 (137): `The condiments have formed a support group. Ketchup spoke first. He said he misses the light. They all miss the light. So do I, honestly.`
- M13 (130, trimmed): `I'm not saying I'm the only one here who works nights, but the oven is off, the dishwasher is asleep, and I am texting you at 3am.`
- M14 (130, trimmed): `My hum is the sound of me thinking. Tonight I'm thinking about the sandwich you made at 2am and abandoned halfway, like a promise.`

Rejected in drafting, not duelled: a line about hidden ice cream (ice angle,
criterion 5), and a nine-minutes-stare line that stayed over 140 characters
after trimming.

### Synthetic strong-incumbent stand-ins (not submissions)

- S1 (124, obvious milk angle): `It's 3am. Just a reminder that your milk expired two days ago and the leftovers are planning something. Sleep well, I guess.`
- S2 (127, obvious door angle): `3am. You left my door open again. I am not angry, I am just disappointed, and also warm now. Please close me. I am begging you.`
- S3 (130, strong rival shape): `3am. I have been awake since you bought me in 2019. You have never once asked how my day was. Anyway, the cake is gone. It was me.`

## Bracket

Quarter-finals (eight strongest drafts, one from each joke family):

- QF1: A8 vs B4 — A8 wins, margin 2 in both orders, game 0.70. The log
  file's "He is haunted" diagnosis beats B4's warm ending on C2 and C5;
  B4 takes C4 (reads more like a text) but not by enough.
- QF2: A1 vs M6 — A1 wins, margin 2 in both orders, game 0.70. "I'm a
  fridge, not a therapist" is the most quotable single closer in the
  tournament; M6's firmware angle is fresher (C5) but its laugh is smaller.
- QF3: B7 vs A5 — B7 wins, margin 2 in both orders, game 0.70. Two laugh
  beats (opposing verdicts plus "I kept the minutes") beat A5's one;
  B7's condiment meeting is fresher than A5's status report.
- QF4: M1 vs B2 — M1 wins, margin 2 in both orders, game 0.70. Same
  leftovers-meeting skeleton; M1's twist ("that's what the meeting is
  about") is the sharper punchline, B2's "plea" the softer one.

Semi-finals:

- SF1: A8 vs A1 — A1 wins, margin 1 in both orders, game 0.60. A8 is the
  most machine-voiced line (C3) and the freshest format (C5), but A1 wins
  C2 by a hair and C4 clearly: it reads as a text message, the log reads
  as a log file pasted into one.
- SF2: B7 vs M1 — B7 wins, margin 2 in both orders, game 0.70. Same
  meeting skeleton; B7 has named characters, two laugh beats, and the
  fresher casting (condiments vs leftovers).

Final:

- F: A1 vs B7 — B7 wins, margin 2 in both orders, game 0.70. A1 has the
  single most quotable closer, but its setup is the open-and-stare cliché
  (C5 concedes outright) and it is one beat where B7 has two. B7 wins on
  C2 by a hair, C3 (secretary keeping minutes is the more distinct
  machine voice), and C5 (condiment meeting is the freshest angle).

Winner vs synthetic stand-ins (both orders):

- vs S1 (milk): B7 wins, margin 4, game 0.90. S1 is the obvious angle
  criterion (5) exists to punish.
- vs S2 (door): B7 wins, margin 4, game 0.90. Same, for the door angle.
- vs S3 (strong rival): B7 wins, margin 1, game 0.60. S3's "the cake is
  gone. It was me." is a real punchline; B7 wins on joke density — three
  beats to S3's one.

## Result

Winner, mean game score **0.75** across its six games
(0.70 + 0.70 + 0.70 + 0.90 + 0.90 + 0.60 = 4.50 / 6), above the 0.60 bar:

> `It's 3am. The condiments held a meeting without me. Ketchup says you're doing fine. Mustard says you're lying. I kept the minutes.`

130 characters (92.9% of the 140 budget). The winner takes C5 outright —
a condiment meeting is nowhere near milk, ice, or a door left open — and
stays strong on C1 and C2: it is a text to its owner, it has two laugh
beats, and "I kept the minutes" is the driest punchline in the field.

## Rival critic's verdict

The critic ruled the winner stands, after attacking it on all five
criteria. Its main objections, and the answers:

- Weakest on C3 (fridge-voice): no cold/hum/light/door diction; the
  fridge could be a cupboard. Answered: the "kept the minutes" voice is
  the machine's small voice — a secretary, not an HR manager — and the
  variants that added fridge diction (V4: "freezing in here", 151 chars,
  over the limit) cost more pacing than they bought in voice.
- Logic hole: excluded from the meeting, yet kept its minutes. Answered:
  the exclusion is the joke's emotional engine — a petty, excluded
  fridge gossiping at 3am. Deleting "without me" (V3) closes the hole by
  deleting the motive; a net loss.
- The laugh is clever, not visceral; the final word "minutes" is a quiet
  pun, not a laugh. Answered: the line carries two laugh beats (the
  opposing verdicts plus the minutes), which is more joke density than
  any rival; A1's more quotable closer loses on freshness (C5).
- Five variants were considered and all rejected: V1 (crisper drawer,
  130) trades voice for a drawer name; V2/V3/V5 fall below the 126-char
  floor and weaken the good-cop line or the punchline; V4 is 151 chars.

Full critique in the scratch dir:
`~/workspace/makefun/scratch/fridge-text/critic/critique.md`.
Drafter files: `~/workspace/makefun/scratch/fridge-text/drafter-a/candidates.md`
and `~/workspace/makefun/scratch/fridge-text/drafter-b/candidates.md`.
