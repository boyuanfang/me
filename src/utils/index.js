import React from 'react';
import DOMPurify from 'dompurify';

export const SafeHTML = ({ html }) => (
  // eslint-disable-next-line react/react-in-jsx-scope, react/no-danger
  <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />
);

export const PLACEHOLDER = () => 0;
