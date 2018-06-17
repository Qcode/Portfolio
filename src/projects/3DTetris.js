import logoImage from '../assets/screenshots/3d-tetris/logo.png';
import shot1Image from '../assets/screenshots/3d-tetris/shot1.png';
import shot2Image from '../assets/screenshots/3d-tetris/shot2.png';
import shot3Image from '../assets/screenshots/3d-tetris/shot3.png';

export default {
  title: '3D Tetris',
  tabs: ['Media', 'Description', 'Controls', 'Credits'],
  defaultTab: 'description',
  description: `
  3D Tetris was developed in October 2013. This was the first time I finished a project in a language that wasn't using Lua and the Löve engine, so it was a fairly significant moment.

  The game is developed in Unity3D - although I'm fond of the project itself, the game design is fairly lacking. As a tech demo it's an interesting concept, but as a game it is essentially just Tetris, but you can get rid of pieces that you don't like - removing all the challenge.

  One major thing I learned in completing this project was the importance of understanding the environment you're working with, and to adapt to that environment rather than resiting change.
  I had significant trouble understanding the proper workings of Unity3D, so rather than utilize their various SceneManagers, I instead just controlled everything in one large script.

  Taking the time to learn about the inner workings on Unity and understanding how to properly structure the game would have fixed some bugs and also resulted in much cleaner code.

  Nevertheless, it's interesting to try out - if you can master the many, many controls, you might have some fun.`,
  media: `
  <img src=${logoImage}/>
  <img src=${shot1Image}/>
  <img src=${shot2Image}/>
  <img src=${shot3Image}/>
  `,
  controls: `**Arrow keys** - Move tetromino on board

  **A/D** - Rotate tetromino on x axis

  **W/S** - Rotate tetromino on y axis

  **Q/E** - Rotate tetromino on z axis

  **Spacebar** - Drop tetromino immediately

  **X** - Soft drop tetromnio

  **Tab** - Hold tetromino

  **Left/Right shift** - Control Camera

  All controls are customizable inside of the launcher menu.`,
  credits: '**TheSeek** - Art and Music',
  downloads: {
    Mac: '3DTetris/3DTetrisMac.zip',
    Windows: '3DTetris/3DTetrisWin.zip',
    Linux: '3DTetris/3DTetrisLinux.zip',
  },
};
