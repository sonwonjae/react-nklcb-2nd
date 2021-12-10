import React from 'react';
import './DescriptionList.css';

export function DescriptionList({ children }) {
  return <dl className="descriptionList">{children}</dl>;
}
