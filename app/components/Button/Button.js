import React, { PropTypes } from 'react'

import css from 'Button.css'

export default function Button(props) {
  const { color = 'red', size = 12, children, onClick } = props
  let styles = {
    color,
    fontSize: size
  }

  return (
    <button className={css.btn} onClick={(...args) => onClick(...args)} style={styles}>{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOf([10, 11, 12, 13, 14]),
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  children: 'button',
  color: 'black',
  size: 12,
  onClick: () => {},
}

