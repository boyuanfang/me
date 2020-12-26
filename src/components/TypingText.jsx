import React from 'react';
import { Promise } from 'bluebird';

class TypingText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      cursor: true,
    };

    this.texts = ['韩钰婷'];
    this.length = this.texts.length;

    setTimeout(this.start, 1000);
  }

  start = () => {
    this.write(0, 0);
  }

  write = async (index, i) => {
    const text = this.texts[index];
    if (i <= text.length) {
      this.setText(text.slice(0, i));
      await Promise.delay(100);
      this.write(index, i + 1);
    } else {
      this.setCursor(false);
      await Promise.delay(2000);
      this.setCursor(true);
      this.backspace(index, i);
    }
  }

  backspace = async (index, i) => {
    const text = this.texts[index];
    if (i >= 0) {
      this.setText(text.slice(0, i));
      await Promise.delay(50);
      this.backspace(index, i - 1);
    } else {
      await Promise.delay(1500);
      this.write((index + 1) % this.length, 0);
    }
  }

  setText = (text) => { this.setState({ text }); }

  setCursor = (cursor) => { this.setState({ cursor }); }

  renderCursor = () => {
    const { cursor } = this.state;
    return <span className={cursor ? 'typing-cursor' : 'typing-cursor-off'}>┃</span>;
  }

  renderText = () => {
    const { text } = this.state;

    return (
      <span className="typing-text">
        {/* {this.texts[index]} */}
        {text}
      </span>
    );
  }

  render = () => (
    <>
      {this.renderText()}
      {/* {this.renderCursor()} */}
    </>
  )
}

export default TypingText;
