import React, { Component } from 'react';

class End extends Component {
  render() {
    return (
      <div className="Footer">
        <ul>&copy; 2018 Rachel Wang Yoga</ul>
        <ul>
          <a target="_blank" href="https://www.facebook.com/rachelywangyoga/">
            <li class="fab fa-facebook" />
          </a>
          <a target="_blank" href="https://www.instagram.com/rachely.wang/">
            <li class="fab fa-instagram" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rachel-wang-04657448/"
          >
            <li class="fab fa-linkedin" />
          </a>
        </ul>
      </div>
    );
  }
}

export default End;
