import React from 'react';

function About() {
  return (
    <div className="page-container">
      <h1>Hello!</h1>
      <p>My name is Ross Evans.</p>
      <p>I&apos;m currently a student, studying Computer Science at the University of Waterloo.</p>
      <p>
        This website exists as place to host all of the projects I&apos;ve worked on. You might find
        a few of them interesting.
      </p>
      <p>
        Apart from programming, I also enjoy{' '}
        <a href="https://www.goodreads.com/user/show/72152345-ross-evans">reading</a>, playing board
        games with my friends, and taking part in{' '}
        <a href="https://www.facebook.com/UWCabaret/">UW Cabaret Club</a>.
      </p>
      <p>
        I always put an about page on my website despite never knowing what to put on it. The
        projects speak for themselves more than anything.
      </p>
      <p>Thank you for visiting!</p>
    </div>
  );
}

export default About;
