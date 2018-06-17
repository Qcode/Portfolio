import titleImage from '../assets/screenshots/mari0-online-mod/title.png';
import menuImage from '../assets/screenshots/mari0-online-mod/menu.png';
import lobbyImage from '../assets/screenshots/mari0-online-mod/lobby.png';

export default {
  title: 'Mari0 Online Mod',
  tabs: ['Media', 'Description'],
  defaultTab: 'description',
  description: `
  The Mari0 Online Mod, released in September 2014, is one of many mods I developed for the open source game Mari0. What's notable about the online mod is that it was by far the most popular thing I've ever created.

  Mari0 is a game that combines the 1985 Super Mario Brothers, with the Valve game Portal. It's open source, and written in Lua with the Löve framework. Although the developer of the game posted videos of online multiplayer tests, they were never able to complete the feature. After doing some basic networking tests myself, I took the initiative to try and create it myself.

  Upon release, the mod rode off of the popularity of Mari0. The trailer currently has over 30,000 views, and I've amassed over 20,000 downloads of the project. Although it's a shame that my most popular creation is not completely original, I'm happy that it's brought some people some joy.

  And, there was even a [Polish Let's Play](https://www.youtube.com/watch?v=VVkcvR6b7T8) made with almost 1 million views. How cool is that?`,
  media: `
  <iframe width="560" height="315" src="https://www.youtube.com/embed/hjqXkqGx3vM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

  ![Logo](${titleImage})

  ![Online Menu](${menuImage})

  ![Lobby Menu](${lobbyImage})
  `,
  downloads: {
    Mac: 'Mari0online/Mari0onlineMac.zip',
    Windows: 'Mari0online/Mari0onlineWin.zip',
    Source: 'Mari0online/Mari0onlineSource.love',
  },
};
