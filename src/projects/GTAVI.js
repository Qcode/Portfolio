import shot1Image from '../assets/screenshots/gtavi/1.png';
import shot2Image from '../assets/screenshots/gtavi/2.png';
import shot3Image from '../assets/screenshots/gtavi/3.png';

export default {
  title: 'GTA VI',
  tabs: ['Media', 'Description', 'Controls', 'Credits'],
  defaultTab: 'description',
  description: `
  GTA VI was developed at a hackathon hosted by PEIDevs. The game was made in 11 hours, so it's a resonably simple concept game design wise.

  This game is more significant to me as it marked the first time I began to reach out to other developers in local communities. After attending the hackathon, I became a regular member of the PEIDevs group, which taught me a lot about software development and led to further opportunities such as my very first job at [silverorange](http://silverorange.com/).

  GTA VI is a 2d top-down shooter, with infinite waves of enemies and scalable difficulty. You, as the bucket headed protagonist, attempt to prevent swarms of turtles from reaching the ever important crystal. I'm sure this is symbolic for something somehow`,
  media: `
  <img src=${shot1Image}/>
  <img src=${shot2Image}/>
  <img src=${shot3Image}/>
  `,
  controls: `**WASD** - Move

  **Mouse** - Aim and shoot`,
  credits: `**Sam Lopes** - Additional programming

  **Rosanna Kressin** - Art`,
  downloads: {
    Mac: 'GTA VI/GTA VI Mac.zip',
    Windows: 'GTA VI/GTA VI Win.zip',
    Source: 'GTA VI/GTA VI.love',
  },
};
