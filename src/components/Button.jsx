/**
 * @copyright 2025 istiakAHMEDsaad
 * @license Apache-2.0
 */

import PropTypes from 'prop-types';

// Primary Button
const ButtonPrimary = ({ href, target = '_self', label, icon, classes }) => {
  if (href) {
    return (
      <a href={href} target={target} className={'btn  btn-primary ' + classes}>
        {label}
        {icon ? (
          <span className='material-symbols-rounded' aria-hidden='true'>
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return <button className={'btn btn-primary ' + classes}>
      {label}
      {icon ? (
          <span className='material-symbols-rounded' aria-hidden='true'>
            {icon}
          </span>
        ) : undefined}
    </button>;
  }
};

ButtonPrimary.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  classes: PropTypes.string,
};


// Button Outline
const ButtonOutline = ({ href, target = '_self', label, icon, classes }) => {
  if (href) {
    return (
      <a href={href} target={target} className={'btn  btn-outline ' + classes}>
        {label}
        {icon ? (
          <span className='material-symbols-rounded' aria-hidden='true'>
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return <button className={'btn btn-outline ' + classes}>
      {label}
      {icon ? (
          <span className='material-symbols-rounded' aria-hidden='true'>
            {icon}
          </span>
        ) : undefined}
    </button>;
  }
};

ButtonOutline.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };
