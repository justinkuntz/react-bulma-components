import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';

import CONSTANTS from '../../../constants';
import Element from '../../element';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

const Help = React.forwardRef(({
  className,
  children,
  color,
  ...props
}, ref) => (
  <Element
    {...props}
    ref={ref}
    className={classnames('help', className, {
      [`is-${color}`]: color,
    })}
  >
    {children}
  </Element>
));

Help.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  children: PropTypes.node,
};

Help.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  color: null,
  renderAs: 'p',
};

export default Help;
