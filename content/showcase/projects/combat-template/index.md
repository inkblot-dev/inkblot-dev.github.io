+++
title = 'Combat Template'
category = 'project'
description = 'My largest project as an instructional assistant for DigiPen Institute’s game feel class -- a tool empowering students to create a multi-weapon, multi-attack level combat system in five weeks or less.'
layout = 'project'
tags = ['project', 'unreal-5', 'tools', 'systems-design', 'technical-design', 'ux-design']
showDate = false
showReadingTime = false
showWordCount = false
showTableOfContents = false

[Params]
team = 'DigiPen'
engine = 'Unreal 5'
platforms = 'Internal (PC)'
term = '8 months'
role = 'Lead developer, gameplay programmer, animation programmer'
+++
This project was a huge undertaking in my prior work as a teaching assistant. Design students needed to be able to build an entire combat prototype in five weeks, alone. The challenge is, designers are not always technical. I was asked to build them a scaffolding, similar to a system a peer built in Unity, but this time for Unreal Engine. This project required me to flex all of my professional muscles to complete:
* *combat system scaffold*: Students would need to implement multiple means of attack, each with different attack levels. I built a system to dynamically add swappable weapons, each with customizable bindings, actions, and effects. Attacks could optionally be set to cancel into each other, creating a truly smooth experience.
* *animation system scaffold*: Each action in game needed appropriate animations. I built a system to associate those animations with actions. Students could also choose between implementing SFX, VFX, and gameplay events directly into the animation via notifies or coding it directly into a weapon's blueprint.
* *documentation site*: I knew students would need to learn a lot of new systems, and Epic's documentation isn't perfect. In addition to documenting any system I created, I also wrote instructional guides and best practices for working in Unreal's various systems. Because there's a lot to sift through, I wanted the documentation to be as easy to access or search as possible, so I built a website with Hugo to host on GitHub pages. Because the repo would be hosted on GitHub, future TAs could append the documentation through pull requests and students could distribute articles they found helpful outside of the class.

The tool remains in use for the class today. I'm proud of what I accomplished on this project, as it reflects the attention to detail I bring to all of my designs.