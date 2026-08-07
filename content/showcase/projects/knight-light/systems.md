Deliverables:
* An alternative gameplay pitch that reworks the wave-defense mechanics.
* An upgrades system to add progression throughout a playthrough.
* A master document with descriptions, ASFs, and implementation notes describing all planned mechanics.

I split the system design work into two parts. I would handle non-combat systems (core mechanics and progression), while one of our junior designers, Taylor, would handle combat systems (healing, enemies, attacks). As part of my work as a design producer, I also created a combat-mechanics document that described gameplay mechanics and provided detailed information about the assets they would require. The document was color-coded to make it more accessible to busy other departments.

# Witch Balls
The crux of our gameplay rework centered around a new mechanic, *witch balls*. The initial prototype of the game was a wave defense game, in which monsters would attack the windows around town and Ptolemy would need to protect them. 
* Since enemies would spawn at the edges of the map, and these windows were also at the edges, enemies would never have reason to move through the center of the area or engage with the player unless confronted. 
* I originally advocated to completely remove the defense mechanic and replace it with a "rout all enemies"-style win condition, but leadership decided the defense mechanics were non-negotiable. 
Instead, I centralized the defense mechanic into one point per area, a ward called a witch ball.
* In addition to improving enemy pathing, switching to a single defense point reduced the cognitive overhead of the mechanic for the player. They no longer had to watch multiple windows, sometimes in poorly lit areas.

# Upgrades
To create progression and rewards, I designed and pitched an upgrades system. In the original prototype, defending an area would cause a gift to appear, permanently increasing one of three stats.
* With us adding more areas, increasing one stat didn't seem like it'd scale.
* The origin of the gift was unclear, and it wasn't clear which gift would increase which stat.
In my rework, defending a witch ball would drop multiple gifts. Gifts could then be exchanged for upgrades at a shrine between levels, where you could not only upgrade your stats, but heal.
* This system would've made the progress granted more fine-tunable per area. Getting multiple gifts and being able to purchase multiple stats would also allow players invest in multiple facets of combat.
* I also introduced midstone and capstone abilities, which would give players something to work towards and encourage them to develop a playstyle. These abilities were intentionally lightweight and functionally amount to statistical improvements, but they would look more game-changing to the player.
Ultimately, this mechanic was scraped due to production concerns. Realizing this system would have occupied my bandwidth when I could otherwise be helping with levels, and we had no engineering or VFX bandwidth to support implementation.

> [!info]+ Retrospective
> The most consistent feedback designers got post-release is that the game is too hard. If we had implemented the upgrades system, I believe we could have mitigated that pain point.