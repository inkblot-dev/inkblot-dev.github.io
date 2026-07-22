## Interface Design
Deliverables:
* Three wireframes.
    * Main menu.
    * In-game HUD.
    * Pause menu.
* Design POC on UI strike team.
* Visual style guidelines for global HUD design.

> [!abstract] Brief
> **Starting point:** utilitarian menus, dense in-game HUD.  
> **Objective:** update core menus and HUD, reinforce the engagement type of wonder.

### In-game HUD
Stardust is all about wonder and heroism — as such, my first priority was clear the screen as much as possible to soak in the environment. In practice, this takes two forms:
* *Hideaway elements*: elements appear when necessary and disappear when not, saving screen real-estate for the environment.
* *Reduced visual pull*: UI elements are simplified into geometric forms as to not ambiently draw the player's eye from the environment.

The delivered wireframe was kitbashed in Krita using an in-game screenshot. I patched out the old UI and drew new elements in their place.

{{<figure
    src="images/ui/hud-wf.png"
    alt="Wireframe of a game's H.U.D."
    caption="The final draft wireframe of the HUD rework — kitbashed in Krita."
>}}

### Menus
I took the same principle of maximizing the environment's visibility in the menus as well.
* *Translucent backgrounds*: low opacity backgrounds make the environment visible even in menus. If I were to do this again, I'd go a step further and add dropshadow to the text as to not compromise readability.
* *Hugging the edges*: moving elements to the edge of the screen, rather than the center, leaves plenty of space to enjoy the environment. As a bonus, submenus could appear in the negative space without needing a whole modal!

{{<figure
    src="images/ui/main-wf.png"
    alt="Wireframe of a game's main menu."
    caption="A wireframe of the proposed main menu — kitbashed and sketched over in Krita. I focused on conveying the type of composition that would serve this design."
>}}

{{<figure
    src="images/ui/pause-wf.png"
    alt="Wireframe of a game's pause menu."
    caption="A wireframe of the proposed pause menu — kitbashed and sketched over in Krita. I focused on communicating how the menu and sub-menu should be placed in relation to each other."
>}}

### Results
The UI shipped on-time with the alpha build. Not everything got implemented; our interface strike team was stretched thin. Despite that, this was the first project I felt really proud of my interface work. The kitbashing strategy worked great, and it became a mainstay in my workflow moving forward.

Given more time, I would address the following:
* adding dropshadow to text on translucent backgrounds.
* advocating harder for allocating resources to the interface strike team, especially implementation.
* adding a wireframe for how settings appear on the main menu.