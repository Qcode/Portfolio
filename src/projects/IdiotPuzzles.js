import titleImage from '../assets/screenshots/idiot-puzzles/title.png';
import shot1Image from '../assets/screenshots/idiot-puzzles/shot1.png';
import shot2Image from '../assets/screenshots/idiot-puzzles/shot2.png';
import shot3Image from '../assets/screenshots/idiot-puzzles/shot3.png';
import shot4Image from '../assets/screenshots/idiot-puzzles/shot4.png';

export default {
  title: 'Idiot Puzzles',
  tabs: ['Media', 'Description', 'Controls', 'Credits'],
  defaultTab: 'description',
  description: `
  I started development on Idiot Puzzles in April 2013. This was created in response to a game called "Turtle: Puzzles", which at the time was being developed by another user on a games and programming forum I used to frequent.

  Idiot Puzzles was therefore developed as a parody of Turtle: Puzzles, essentially trying to demonstrate that generic puzzle platformers are easy to make... by making a generic puzzle platformer. Admittedly this was a pretty childish thing to do considering TurtleP (the developer of Turtle: Puzzles) had never actually done anything malicious - he just posted a lot of screenshots of his game in progress.
  But what can I say, I was 14 at the time and didn't have anything better to do than to make games in response to internet squabbles.

  Idiot Puzzles was a big improvement from Bighead for me - for one, I was able to complete a higher quality game in a tenth of the time. Idiot Puzzles also contained improvements to my physics engine as well as overall optimizations and a lighting system.

  And getting other members of the forum to do pixel art was definitely worthwhile...

  Although the game is pretty generic - one of my friends described the puzzles as "remarkably linear", it's still 25 levels of reasonable quality, free, video game entertainment. I'd recommend giving it a try, if for nothing other than to try 10+ hats in the settings menu.`,
  media: `
  <img src=${titleImage}/>
  <img src=${shot1Image}/>
  <img src=${shot2Image}/>
  <img src=${shot3Image}/>
  <img src=${shot4Image}/>
  `,
  controls: `**Arrow Keys** - Move

  **Spacebar** - Pick up crates and activate levers`,
  credits: `**Idiot9.0** - Character Art and Level Design

  **TheSeek** - Graphics and Level Design

  **Mr.Q.Marx?** - Music`,
  downloads: {
    Mac: 'IdiotPuzzles/IdiotPuzzlesMac.zip',
    Windows: 'IdiotPuzzles/IdiotPuzzlesWin.zip',
    Source: 'IdiotPuzzles/IdiotPuzzlesSource.zip',
  },
};
