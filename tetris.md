# Episode Tile Grid Animation Specification

## Overview

This document outlines the logic and behavior for animating episode tiles in a 6×6 grid using classic Tetris block shapes. The animation mimics the gameplay of Tetris, where blocks scroll upward and lock into place at the top of the grid.  

We will use **GSAP** and **ScrollTrigger** to animate the blocks with scrubbing for scroll-based control.

---

## Grid Details

- **Grid Size**: 6 columns × 6 rows  
- **Total Tiles**: 36 tiles  
- **Tile Type**: Each tile represents an episode  
- **Goal**: Fill the entire grid with episode tiles using Tetris blocks  

---

## Tetris Block Constraints

- **Block Size**: Each Tetris block consists of 4 tiles  
- **Total Blocks Needed**:  
  \[
  \frac{6 \cdot 6}{4} = 9 \text{ blocks}
  \]

- **Allowed Block Types** (classic Tetris):
  - `I` (straight line)
  - `O` (square)
  - `T` (T-shape)
  - `L` (L-shape)
  - `J` (reverse L)
  - `S` (zigzag)
  - `Z` (reverse zigzag)

---

## Block Composition Example

To fill the grid completely, use the following combination of blocks:

| Block Type | Count | Notes |
|------------|-------|-------|
| I          | 2     | Vertical or horizontal |
| O          | 2     | Fits 2×2 sections |
| T          | 1     | Center or edge filler |
| L          | 2     | Corner filler |
| S          | 1     | Zigzag filler |
| Z          | 1     | Complements S |

- **Total Blocks**: 9  
- **Total Tiles**: \(9 \cdot 4 = 36\)  

---

## Episode Test Data

Below is sample data for mapping episodes to tiles:

```ts
const episodes: Episode[] = [
  {
    name: "The Art of Storytelling",
    date: "February 29, 2024",
    referenceImage: "/images/1.jpg",
    description:
      "Explore the intricate art of crafting compelling narratives in video games, from character development to plot twists.",
  },
  {
    name: "Beyond Polygons",
    date: "February 22, 2024",
    referenceImage: "/images/6.jpg",
    description:
      "Dive into the advancements in graphics technology, moving beyond basic polygons to create immersive and realistic game worlds.",
  },
  {
    name: "The Evolution of RPGs",
    date: "February 15, 2024",
    referenceImage: "/images/3.jpg",
    description:
      "Trace the evolution of role-playing games, from their early beginnings to the complex, open-world experiences of today.",
  },
  {
    name: "One For Accessibility",
    date: "February 8, 2024",
    referenceImage: "/images/4.jpg",
    description:
      "Discuss the importance of making gaming accessible to everyone, including the latest tools and features designed to accommodate diverse needs.",
  },
  {
    name: "Indie: Hidden Gems",
    date: "February 1, 2024",
    referenceImage: "/images/5.jpg",
    description:
      "Uncover the hidden gems of the indie gaming scene, highlighting unique and innovative games that often go unnoticed.",
  },
  {
    name: "The Future of VR Gaming",
    date: "January 25, 2024",
    referenceImage: "/images/2.jpg",
    description:
      "Examine the future of virtual reality gaming, including emerging technologies and the potential for groundbreaking experiences.",
  },
  {
    name: "Revive Couch Co-Op!",
    date: "January 18, 2024",
    referenceImage: "/images/7.jpg",
    description:
      "Celebrate the resurgence of couch co-op games, where players can enjoy gaming together in the same physical space.",
  },
  {
    name: "Elden Ring Sucks",
    date: "January 11, 2024",
    referenceImage: "/images/8.jpg",
    description:
      "Delve into the polarizing opinions surrounding Elden Ring, exploring both its strengths and criticisms from the gaming community.",
  },
  {
    name: "The Nintendo Model",
    date: "January 9, 2024",
    referenceImage: "/images/9.jpg",
    description:
      "Analyze the unique business and creative model of Nintendo, and how it has shaped the gaming industry.",
  },
  {
    name: "Sense of Wonder",
    date: "December 28, 2023",
    referenceImage: "/images/10.jpg",
    description:
      "Reflect on the sense of wonder and discovery that video games can evoke, and how developers create these magical experiences.",
  },
  {
    name: "The Evolution of RPGs",
    date: "January 7, 2024",
    referenceImage: "/images/11.jpg",
    description:
      "Explore the evolution of role-playing games from classic titles to modern masterpieces, and how they have influenced gaming culture.",
  },
  {
    name: "Esports Revolution",
    date: "January 5, 2024",
    referenceImage: "/images/12.jpg",
    description:
      "Discuss the rise of esports and its impact on the gaming industry, including its economic, social, and cultural implications.",
  },
  {
    name: "Indie Game Phenomenon",
    date: "January 3, 2024",
    referenceImage: "/images/13.jpg",
    description:
      "Examine the indie game movement and how small studios are pushing the boundaries of creativity and innovation in gaming.",
  },
  {
    name: "The Art of Game Design",
    date: "January 1, 2024",
    referenceImage: "/images/14.jpg",
    description:
      "Delve into the intricacies of game design, exploring the principles and practices that make games engaging and memorable.",
  },
  {
    name: "Retro Gaming Renaissance",
    date: "December 30, 2023",
    referenceImage: "/images/15.jpg",
    description:
      "Discuss the resurgence of retro gaming and how classic titles are being rediscovered and celebrated by new generations of gamers.",
  },
  {
    name: "The Future of VR Gaming",
    date: "December 26, 2023",
    referenceImage: "/images/16.jpg",
    description:
      "Explore the potential of virtual reality in gaming, including its current state and future possibilities for immersive experiences.",
  },
  {
    name: "Gaming and Mental Health",
    date: "December 24, 2023",
    referenceImage: "/images/17.jpg",
    description:
      "Analyze the relationship between gaming and mental health, discussing both the positive and negative impacts on players.",
  },
  {
    name: "The Impact of Streaming",
    date: "December 22, 2023",
    referenceImage: "/images/18.jpg",
    description:
      "Examine the influence of game streaming platforms like Twitch and YouTube on the gaming industry and community.",
  },
  {
    name: "Game Narrative Excellence",
    date: "December 20, 2023",
    referenceImage: "/images/19.jpg",
    description:
      "Highlight some of the best narrative-driven games and discuss what makes their storytelling so compelling and impactful.",
  },
  {
    name: "The Role of Music in Games",
    date: "December 18, 2023",
    referenceImage: "/images/20.jpg",
    description:
      "Explore the importance of music in video games, and how soundtracks enhance the gaming experience and evoke emotions.",
  },
  {
    name: "The Ethics of Game Development",
    date: "December 16, 2023",
    referenceImage: "/images/21.jpg",
    description:
      "Discuss the ethical considerations in game development, including issues like representation, inclusivity, and corporate responsibility.",
  },
  {
    name: "The Rise of Mobile Gaming",
    date: "December 14, 2023",
    referenceImage: "/images/22.jpg",
    description:
      "Analyze the growth of mobile gaming and its impact on the industry, including the challenges and opportunities it presents.",
  },
  {
    name: "The Legacy of Classic Franchises",
    date: "December 12, 2023",
    referenceImage: "/images/23.jpg",
    description:
      "Reflect on the enduring legacy of classic gaming franchises and how they have shaped the industry and influenced modern games.",
  },
  {
    name: "The Social Aspects of Gaming",
    date: "December 10, 2023",
    referenceImage: "/images/24.jpg",
    description:
      "Discuss the social aspects of gaming, including multiplayer experiences, online communities, and the role of games in social interaction.",
  },
];
