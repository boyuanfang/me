import React from 'react';
import styled from 'styled-components';
import { Promise } from 'bluebird';

const delayBeforeTyping = 500;
const typingInterval = 45;
const delayBeforeBackSpace = 3000;
const backspaceInterval = 25;

const Cursor = styled.span`
  display: inline-block;
  opacity: 1;
  animation: blink 1s cubic-bezier(1, 0, 0, 1) infinite;
  font-size: 24px;
  margin-left: 24px;

  @keyframes blink {
    0% { opacity: 1; }
    35% { opacity: 1; }
    50% { opacity: 0; }
    65% { opacity: 1; }
    100% {opacity: 1; }
  };
`;

class TypingText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.texts = props.texts;
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
      await Promise.delay(typingInterval);
      this.write(index, i + 1);
    } else {
      await Promise.delay(delayBeforeBackSpace);
      this.backspace(index, i);
    }
  }

  backspace = async (index, i) => {
    const text = this.texts[index];
    if (i >= 0) {
      this.setText(text.slice(0, i));
      await Promise.delay(backspaceInterval);
      this.backspace(index, i - 1);
    } else {
      await Promise.delay(delayBeforeTyping);
      this.write((index + 1) % this.length, 0);
    }
  }

  setText = (text) => { this.setState({ text }); }

  renderCursor = () => {
    return <Cursor>■</Cursor>;
  }

  renderText = () => {
    const { text } = this.state;

    return (
      <span className="typing-text">
        {text}
      </span>
    );
  }

  render = () => (
    <>
      {this.renderText()}
      {this.renderCursor()}
    </>
  )
}

export default TypingText;
