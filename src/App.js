import React from 'react';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

class App extends React.Component {
  render() {
    return (
      <div>

        <Nav />
        <Home/>
        <AboutMe />
        <Projects />
        <Contact />
      </div>

    );

  }
}

export default App;
