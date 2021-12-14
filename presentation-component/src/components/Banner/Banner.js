/* eslint-disable no-unused-vars */
import './Banner.css';
import React from 'react';
import { classNames } from '../../utils';
import { A11yHidden } from '..';

export function Banner({
  as: ComponentName,
  url,
  width,
  height,
  className,
  style,
  children,
  ...restProps
}) {
  return (
    <figure>
      <ComponentName
        className={classNames('banner', className)}
        style={{
          width,
          height,
          background: `url(${url}) no-repeat left top / contain`,
          ...style,
        }}
        {...restProps}
      />
      <A11yHidden>{children}</A11yHidden>
    </figure>
  );
}
Banner.defaultProps = {
  as: 'div',
};
