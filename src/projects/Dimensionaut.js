import shot1Image from '../assets/screenshots/dimensionaut/shot1.png';
import shot2Image from '../assets/screenshots/dimensionaut/shot2.png';
import shot3Image from '../assets/screenshots/dimensionaut/shot3.png';
import shot4Image from '../assets/screenshots/dimensionaut/shot4.png';

export default {
  title: 'Dimensionaut',
  tabs: ['Media', 'Description', 'Controls', 'Credits'],
  defaultTab: 'description',
  description: `
  Dimensionaut was developed in 48 hours for the first Löve Jam, which took place in September 2013. The game plays with the concept of multiple dimensions that a player can cross through, which are used in unique scenarios to create puzzles and platforming challenges. The art style progresses as you progress through the game, with the time period advancing every few levels.

  Dimensionaut is a short game with some innovative ideas that can be fully experienced in 15 minutes.`,
  media: `
  ![In-Game 1](${shot1Image})

  ![In-Game 2](${shot2Image})

  ![In-Game 3](${shot3Image})

  ![In-Game 4](${shot4Image})
  `,
  controls: `**Arrow Keys** - Move

  **Z** - Jump

  **A** - Go back a layer

  **S** - Move forward a layer

  **X** - Flip switches`,
  credits: `**Idiot9.0** - Character Art

  **TheSeek** - Graphics and Sound Effects

  **Mr.Q.Marx?** - Music`,
  downloads: {
    Mac: 'Dimensionaut/DimensionautMac.zip',
    Windows: 'Dimensionaut/DimensionautWin.zip',
    Source: 'Dimensionaut/DimensionautSource.zip',
  },
};
