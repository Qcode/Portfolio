import titleImage from '../assets/screenshots/bighead/title.png';
import playersImage from '../assets/screenshots/bighead/players.png';
import ingameImage from '../assets/screenshots/bighead/ingame.png';

export default {
  title: 'Bighead',
  tabs: ['Media', 'Description', 'Controls', 'Credits'],
  defaultTab: 'description',
  description: `
  Bighead was the first game I ever created. Development started in March 2012, with the game being released in January of 2013. There are many problems with it - the physics engine is a tad wonky, the graphics are needlessly simple, and the codebase as a whole is drastically messy. Despite all of this I'm still proud of it. The game took me a year to make and its completion marked a significant moment in my life.

  The game is your typical platformer - with simple enemies, bottomless pits, and recurring boss fights. I think the most novel concept in the game is the powerup mechanic - once activated, your character gains the ability to place a block below themselves. This can be used to prevent falling into a bottomless pit, or to block a friend mid-jump in the multiplayer mode, causing them to fall and die.
  The game is most fun played in its multiplayer mode - as most games are in my opinion.

  If you've got some time and are interested in seeing my first ever project - I'd give this a try. There are 50 levels, with unlockable cheat modes for beating the entire game.`,
  media: `
  ![Menu Screen](${titleImage})

  ![Player Select Screen](${playersImage})

  ![In Game](${ingameImage})
  `,
  controls: `**Arrow Keys** - Move

  **Down key** - Place powerup block`,
  credits: `**J.T. Vineyard** - Music, Sound Effects, and Level Design

  **Finn Belanger** - Art and Level Design`,
  downloads: {
    Mac: 'Bighead/BigheadMac.zip',
    Windows: 'Bighead/BigheadWin.zip',
    Source: 'Bighead/BigheadSource.zip',
  },
};
