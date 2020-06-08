import React from 'react';
import './Home.css';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ""
    }
  };

  componentDidMount() {
    let i = 0;

    const typing = setInterval(() => {
      const typed = this.state.text;
      const finalText = "긍정적인 영향력을 끼치는 개발자가 되고 싶은 윤원철입니다.";

      if (i < finalText.length) {
        this.setState({
          text: typed + finalText[i]
        });
        i++

      } else {
        clearInterval(typing);
      }
    }, 100);
  }

  render() {
    return (
      <div className="home-class" id="home">
        <h1 className="typing-text">{this.state.text}</h1>
      </div>
    );
  }
}

export default Home;