import postImage from '../assets/screenshots/mindful-reddit/post.png';

export default {
  title: 'Mindful Reddit',
  tabs: ['Description'],
  defaultTab: 'description',
  description: `
  [Mindful Reddit](https://mindfulreddit.rossevans.ca/) is a reddit aggregator that focuses on tempering the endless stream of information that Reddit provides.
  I wrote more about the motivation for creating this project on the [about page](https://mindfulreddit.rossevans.ca/about),
  but in short, I desired a way to keep the likeable parts of Reddit while mitigating its ability to so thoroughly capture my attention.

  ![Post](${postImage})

  The site was built in July of 2018 in preparation for the following school year.
  I desired a way to reduce the amount of content Reddit presented on a daily basis so I could dedicate more time to thinking about my studies, working on side projects, and spending time with friends.
  Mindful Reddit was my solution to that problem.

  Mindful Reddit limits an individual to choosing three subreddits they want to see.
  Upon completing this form, they're presented three posts from each subreddit along with the three top comments from each post.
  The site continues displaying this content for three hours, in order to prevent the easily developed habit of repeatedly checking for updates.

  In terms of technical details: mindfulreddit was built in React.
  Rather than directly scraping the subreddits provided, mindfulreddit appends ".json" to the typical url.
  This action provides the reddit data in a parseable format which can then be used to get the relevant comments for each post.
  Data is finally rendered using the react-markdown library.

  The site is hosted at [mindfulreddit.rossevans.ca/](https://mindfulreddit.rossevans.ca/), and [the source is available on GitHub](https://github.com/Qcode/mindfulreddit)`,
};
