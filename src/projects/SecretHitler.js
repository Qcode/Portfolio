export default {
  title: 'Secret Hitler',
  tabs: ['Description'],
  defaultTab: 'description',
  description: `
  One of my favourite board games of all time is [Secret Hitler](http://secrethitler.com/). Rest assured, it's not as bad as it sounds. The game is focused on *stemming* the tide of fascism.
  Essentially the game is a combination of logical deduction while yelling fervently at your friends and lying profusely at the same time. It's great fun.

  Despite this game being great, my friend group had a couple of main grievances. First was the setup time - everybody needs different envelopes that are seeded with 4 cards which can take a while to create.
  Additionally, if there's any screw up behind the distribution of the cards, or if the envelopes have identifiable features, the entire setup process needs to be repeated.

  To alleviate that problem, I built the Secret Hitler board game as web app. Implementation details will follow after the demonstrational video.

  <iframe width="560" height="315" src="https://www.youtube.com/embed/ycozAGcreKc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

  This web app was created with React+Redux on the front end and Express on the back end. Socket.io was used to communicate between the two.

  I'm fairly happy with how the codebase turned out, but if I could change one thing - I would remove Redux.
  My initial reasoning behind using Redux was so that the global state could be easily modified using event listeners from socket.io. In the end however, it resulted in writing a lot of boilerplate when I could have instead elevated state to the App component and simplified things overall.

  Additionally, over time the state got fairly polluted.
  This is definitely my fault for not planning out the structure of my store better. Right now the code puts a lot of things in the base level, whereas I think a nested structure with gamestates as inidivudal objects (in-game, login, lobby, etc.) would have been cleaner.

  Early on in the project I decided my intended scope, and that proved to be a decision that I was very happy with. I decided from the start that my application would serve to only manage one game at a time.
  This allowed me to avoid using some of the more complicated socket.io features such as rooms and namespaces. This worked out nicely as I never intended to provide the game for the general public; when the game is running on an intranet it doesn't make sense to include that level of scale.
  Although this limits the amount of players at a time, it allowed me to prototype and develop much faster.


  You can check out the source on GitHub if you're interested in reading the code or deploying a version of your own.

  [Client Repo](https://github.com/Qcode/SH-Client), [Server Repo](https://github.com/Qcode/SH-Server)`,
};
