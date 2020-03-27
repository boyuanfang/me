import React from 'react';


const TitleHeader = (props) => {
  const { title } = props;

  return (
    <h1>
      {title}
    </h1>
  );
};

export default TitleHeader;
