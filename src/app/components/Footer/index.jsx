import React from 'react';
import Rodal from 'rodal';
import HtmlParser from 'react-html-parser';

import AboutPage from '../../pages/about';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }
  show() {
    this.setState({ visible: true });
  }
  hide() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__left">
            <ul>
              <li>
                <span>© 2017 Wulfcode</span>
              </li>
              <li>
                <a href="#about" onClick={this.show}>About</a>
                <Rodal visible={this.state.visible} onClose={this.hide} width="" height="" animation="fade" duration="600">{HtmlParser(AboutPage)}</Rodal>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer__middle">
            <div>middle</div>
          </div>
          <div className="footer__right">
            <ul>
              <li><a href="//github.com/wulfcode/perkgreed.com">Github</a></li>
              <li><a href="//github.com/wulfcode/perkgreed.com">Waffle</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
