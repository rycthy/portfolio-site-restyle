import React from 'react';
import Frame from './Frame';
import { Projects } from './Projects';

const Welcome = () => {
  return (
    <div>
      <Frame />
      <div id="container">
        <main>
          <section>
            <div id="welcome">
              <h2>THIS IS A WEBSITE ABOUT</h2>
              <h1>ROY CATHEY</h1>
              <p>I'm a front-end web developer. I like building applications on the internet that people get a kick out of using. Worst case scenario, I will get a kick out of it.</p>
              <div className="portrait">
                <p>For whatever it's worth, I look like this: {`\xa0`}</p>
                <img src="./images/mesmall.jpeg" />
              </div>
              <p>I grew up on a farm in Texas, went to <a className="section-link" target="_blank" href="https://en.wikipedia.org/wiki/Hook_%27em_Horns">college in Austin</a>, and somehow managed to find my way to New York City. When I'm not fiddling around with code, I'm getting to know NYC, watching so-bad-it's-actually-good television, and/or giving my dog some belly rubs.</p>
              <div className="row-list">
                <p>Here are some links you might be interested in: <a className="section-link" href="https://github.com/rycthy" target="_blank">GitHub</a>
                  {`,\xa0`}<a className="section-link" href="mailto:rccathey@gmail.com">Email</a>
                  {`\xa0&\xa0`}<a className="section-link" href="https://www.linkedin.com/in/roy-cathey/" target="_blank">LinkedIn</a></p>
              </div>
              <h1 id="projects-header">PROJECTS</h1>
            </div>
          </section>
          <Projects />
        </main>
      </div>
    </div>
  );
}

export default Welcome;
