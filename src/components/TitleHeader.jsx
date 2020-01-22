import React from 'react';
import { Zoom } from 'react-reveal';


const TitleHeader = (props) => {
  const { title } = props;

  return (
    <h1 className="title-header">
      <Zoom cascade>
        {title}
      </Zoom>
    </h1>
  );
};

export default TitleHeader;
