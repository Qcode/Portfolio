import logoImage from '../assets/screenshots/jump-and-shoot/logo.png';
import tutorialImage from '../assets/screenshots/jump-and-shoot/tutorial.png';
import gameplayImage from '../assets/screenshots/jump-and-shoot/gameplay.png';

export default {
  title: 'Jump and Shoot',
  tabs: ['Media', 'Description', 'Credits'],
  defaultTab: 'description',
  description: `
  Jump and Shoot was developed in June 2014. This was very first attempt at developing an app.

  This was developed in Objective C, mainly because Swift didn't yet exist at the time. Similarly to 3D Tetris, this project suffered from me not fully understanding the iOS environment.
  I didn't fully understand the relationship between a scene and a view - or in general, how the 'storyboard' functionality worked. As a result I made the majority of the GUI programatically, which resulted in some messy and unnecessary code.

  Nevertheless, I think this game has some of my best game design so far. 2014 was the year of Flappy Bird, and so my game was developed to be similarly brutally difficult. The mechanics of the game are simple, press left to shoot left, right to shoot right, and middle to jump. Though the controls are simple, the finesse of the game is in the movement. All shots to the right will give you knockback to the left, and shots to the left will give you knockback to the right.

  To play Jump and Shoot, one must control offensively and defensively at the same time, all the while being swarmed by rapid enemies who jump, possess shields, and fly through the air.

  [Download on the App Store](https://itunes.apple.com/us/app/jump-and-shoot/id885610365)`,
  media: `
  <iframe width="560" height="315" src="https://www.youtube.com/embed/-pI9IxZ0tOY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

  ![Logo](${logoImage})

  ![Tutorial Screen](${tutorialImage})

  ![In-Game](${gameplayImage})
  `,
  credits: `**Thomas Wagner** - Copyright Consultance

  **Sam Compton** - Dual Shield Collision Concept`,
};
