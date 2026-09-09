+++
title = 'Wayfarer (Dead Cells fan pitch)'
category = 'bite'
description = 'The Beheaded needs a better map. Or perhaps… none at all.'
layout = 'project'
tags = ['bite', 'pitch']
showDate = false
showReadingTime = false
showWordCount = false
showTableOfContents = false
+++
In this exercise, I pitch a rework to the mini-map in the game, *Dead Cells*. I wanted to explore what a rework would look like in a game already so polished. I used playtest data to identify pain points for new players, which ultimately centered on the map. I pitch an in-place solution by modifying the existing mini-map, plus provide production spec for implementing this. As a further challenge, I then pitch a second comprehensive solution that removes the mini-map entirely, also with a production spec.

> [!alert]
> This exercise is unofficial; it was not done on behalf of Motion Twin or Evil Empire and is not affiliated with either. *Dead Cells* is the intellectual property of Motion Twin and Evil Empire.

### Context
*Dead Cells* is a side-scrolling roguelite in which you play as an immortalized alchemist; after an island nation falls to ruin after a plague, the player must battle through the zombified remains of the kingdom to defeat a mad king and claim their boss cells. As you explore each level, the full-screen and mini-maps populate, recording locations you've passed through and allowing teleportation between pre-generated shrines.

### Data Collection
User data came from multiple rounds of interviews, seeking perspectives from new, active, and former players.

For new users, participants started at the title screen and played either one or two runs, or until they entered the Ramparts. Observational data was acquired from these playthroughs before they were asked to answer a few interview questions about their experience.

For former and active players, participants weren’t always required to play those initial runs. We ran into time constraints when collecting data from experienced players, so we chose to omit observational testing from some of them in exchange for receiving their informational interviews they wouldn't have the time to attend otherwise.

From their data, we arrived at the following conclusions:
* Overall, *DC*'s UI regularly garnered little-to-no negative feedback. In other words, if we weren't doing a UI-specific exercise, it'd likely be more effective for us to allocate resources on other areas of the game.
* A few common pain points were not understanding the status icons above the player's head, and not recognizing when runes couldn't be activated without progressing further.
* The mini-map was divisive among players; some players really liked its inclusion, while others noted that the zoom level of the map and the space it occupies on screen made it difficult to use. Screen-size of the testing device correlated with complaints about screen real-estate (some testers played with the Nintendo Switch in docked mode, others in handheld).

## Pitch 1: In-place adjustments
The full text of the first pitch can be accessed [at this OneDrive link](https://1drv.ms/p/c/2ea9d6a4dad55678/IQC4LVbanQbqTKGeEZWu4qOIAbfk_8QhCVJYlqopvaum4xk?e=C023h2). 

I listed the following as goals for this rework:
* Maximize information presented in its occupied space.
* Have minimal visual impact when not being actively used.
* Provide quickly discernible landmarks in the locale.

To accomplish this, we zoom in the map. Because we zoomed in and reduced the amount of information visible at once, we compensate by highlighting points of interest even if they are slightly off-screen. We also make the background transparent, so that we block less of the screen behind it. And as a bonus, we make the icons for items on the minimap higher fidelity to make them easier to interpret for players.

### Production Scope
I budgeted the following for this adjustment:
* ~1 week for initial deliverable, with a dedicated designer and programmer, plus part time support from an artist.
* Feedback to the changes would be collected from the team’s ordinary beta cycles. Plan for additional 1-3 days after beta feedback to address any player comments.
* Labor costs expected to be ~$6250 USD equivalent based on estimated game developer’s salary in Bordeaux, France.

## Pitch 2: Full rework
The full text of the second pitch can be accessed [at this OneDrive link](https://1drv.ms/p/c/2ea9d6a4dad55678/IQAXkSpvr6QPQbLfHckb7SkUASdh_ZKnTcJwRfhddqPkY_c?e=RFqdH7). 

This pitch assumes that the in-place adjustment has been red-lit, and that the team wants a more comprehensive approach. I listed the following as goals:
* Reduce the screen space dedicated to local navigation.
* Local area is fully navigable without the use of the full-screen map.
* Add challenge to navigation gameplay inline with design values.

To accomplish this, we completely remove the mini-map. For nearby points of interest, we can add an off-screen indicator similar to the existing "door opened" notifications. That way, you'll still be able to find POIs you'd normally spot on the mini-map. The full-screen map still works as it does now. We also add a new resource, "cairns". Players can drop a cairn, clearing fog of war from the full-screen map in a large area. This allows you to plan a path more deliberately, similar to how you could with the mini-map, but also add a new vector for skill expression.

### Production Scope
I budgetted the following for this rework:
* UI Artist, ~32 hours.
* 3D Artist (for cairn sprites), ~8 hours.
* Gameplay programmer, ~6 hours.
* UI programmer, ~32 hours.
* UX designer, ~32 hours.
* Systems designer (for initial cairn systems), ~3 hours.
* Total: ~113 labor-hours, over ~1.5 weeks max.

## Retrospective
> [!alert]
> This section was written later: 2026.

With my modern sensibilities as a designer, I still quite like my first solution. Fixing the problem in-place is cheap, and I think the changes would reflect quite nicely regardless of screen size. Would I advocate for this, were I on Motion Twin's or Evil Empire's teams? I would recommend it only if we had the available bandwidth. The data supported the idea that any major update to the UI is simply not necessary.

The second solution is where I differ from my past self. I really like the idea of creating a feature that players can express skill through; it feels very inline with the principles of *Dead Cells* as a project. Cairns do that in theory, but having more than one trivializes all navigation challenge in levels like Clock Tower. To that end, having only one would make mutations that interface with it more unique within the system, compared to multi-use mutations like Support and Emergency Triage that similarly revolve around another stock or location. It'd actually be really interesting to see those mutations as boss-focused, since there's not a lot of mutations that are uniquely good in boss rooms and that's where you'd be around your cairn for the longest time. Additionally, I just don't think the cairns accomplish the goal of relieving pain points for new players. The data demonstated that new players struggle with existing runes since they don't know they are part of meta-progression; adding yet another stock related to meta-progression only exacerbates that issue. It's a good mechanic being used to fix the wrong problem.