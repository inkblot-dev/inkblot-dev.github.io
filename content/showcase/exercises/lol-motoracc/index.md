+++
title = 'Attack-move rework (LoL Fan Pitch)'
category = 'bite'
description = 'Making Summoner’s Rift accessible for more players, regardless of their motor ability.'
layout = 'bite'
tags = ['bite', 'pitch']
showDate = false
showReadingTime = false
showWordCount = false
showTableOfContents = false
+++
In this exercise, I pitch an accessibility rework for *League of Legends*, namely their attack-move command. LoL is one of my favorite games, but I know from experience that the game lacks sorely in accessibility options. My proposal revolves around creating a priority targetting system, allowing attack-move to interact with both champion stats and the environment.

> [!alert]
> This exercise is unofficial; it was not done on behalf of Riot Games and is not affiliated with Riot Games. *League of Legends* is the intellectual property of Riot Games.

> [!alert]
> Revisiting years later, I don't agree with every decision I made on this exercise. I'll cover a few corrections at the end of the blog.

### Context
In *League*'s default control mode, player movement and auto-attacks are controlled by mouse input. RMB on the ground will order your champion to path to that location. RMB on a unit will order your champion to attack it, moving into range if necessary and repeating until the order is cancelled. Beyond the beginner level, the player is expected to weave these controls together in rapid succession. 

Attack-move is a command inherited from it's genre ancestors; instead of attacking the unit your mouse is over, your champion will attack the nearest unit, either to your mouse or to your player. Because it cannot issue a move order, it's a safer way to attack from max range or while kiting (weaving move commands between attacks to stay mobile and dodge enemy skills). Attack-move can also be a tool for people who have trouble with precision or repeated mouse inputs, i.e. motor dysfunction disabilities -- albeit, with limitations.

## Proposal
Objective: Identify a pain point and pitch a targeted fix for players with impaired motor function.

I established the following criteria.
* (i) changes needed to provide new access to existing systems, without undermining existing forms of challenge within them.
* (ii) changes needed to be fair and responsive for every player, whether disabled or able.

> [!info]- Information about the second principle
> *League* is deeply entrenched in eSports culture. Some communities within gaming are very wary of perceived "e-doping" (using assistance features that provide an advantage not otherwise available to others). While I don't believe that accessibility settings are a meaningful threat to competitive integrity, optics matter. The feature has to be truly optional or we'd run the risk of alienating those players.

### Identifying the Pain Points
The minimum expectation for players is that they can accurately and quickly aim the mouse. Not every player can meet that expectation. 

I’ve found it useful to consider the “minimum ability” that a designer anticipates players will have. It highlights the discrepancy between the audience the designer thinks they will have versus the audience that they actually have.

### Anticipating Hurdles
To make robust decisions about design, it’s important to employ forward-thinking. MOBAs are a highly competitive genre; I needed to get ahead of any systems impacts my changes would have.

The biggest hurdle I foresaw was that making attack-move more robust could trivialize existing forms of skill expression, such as kiting with high move speed or body-blocking using your character's size. Additionally, attack-move is already dove-tailed into the game's ecosystem and cultural memory; how do we convince a veteran player to tolerate changes to a mechanic they've already mastered?

### Proposing a Solution
My favorite part of this solution is that it’s elegant. By changing the way that the attack-move command handles targeting, we expand its functionality without adding a whole new mechanic to the game. That fact is huge, both as a player and a designer:
* Reusing an existing mechanic allows us to mitigate some of the production costs for adding actions.
* Players likely already have the keybind for attack-move still available on their keyboard; they can start using the new system without making any changes to their keyboard layout.

On top of that, we have full control of how “opt-in” this mechanic is. In my pitch, I propose a slider to control the precision of the system; beyond that, we can also add a toggle in the settings for switching to the legacy system altogether.

## Retrospective
> [!alert]
> This section was written later: 2026.

My evaluation of this proposal, with my current sensibilities as a designer: I had the right idea, but my understanding of the attack-move mechanic was a little shallow.

The original pain point persists in modern *League*. Alternating between attacks and movement is still exhausting (and with disabilities like mine, painful!). Beyond a certain level of play, kiting is not optional; it is an intentional lever used to balance champions, both to tweak difficulty and agency. 
* Making characters easier to click demonstrably nerfs move-speed ADCs like Jinx, and buffs immobile bruisers like Garen. I think such a trade-off could be warranted, but I wouldn't feel comfortable moving forward on that without input from the champion balance team, especially at a time where players percieve ADCs to be weak and HP-builders to be OP.
* Additionally, I'm apprehensive to map this feature onto the existing attack-move. By calculating a unit's targeting priority, I've essentially added another cognitive step to using this mechanic, which originally was supposed to simplify the input not complicate it. 

If I were to do this on modern PBE, I'd instead add "sticky mouse" as a new input; while holding a designated modifier key, mouse presses will act as if stickied onto nearby enemies within certain parameters. Because it's a held action, we can recolor the outline of the current target to remove the guesswork without cluttering the screen when out-of-use. I'd also keep the stickying parameters extremely conservative, because I do genuinely worry about this disrupting balance and I'd like to monitor the effects.