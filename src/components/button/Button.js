import React from 'react';
import PropTypes from 'prop-types';

import { ButtonSizes, ButtonThemes, ButtonTypes } from '../../constants/button';

import '../../styles/button.scss';


const Button = ({ disabled, label, onClick, size, theme, type }) => {
    const buttonClass = [
        'button',
        `button--${size}`,
        `button--${theme}`,
        `button--${type}`
    ].join(' ');

    return (
        <button
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
        >
            { label }
        </button>
    )
}

Button.propTypes  = {
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.oneOf(Object.values(ButtonSizes)),
    theme: PropTypes.oneOf(Object.values(ButtonThemes)),
    type: PropTypes.oneOf(Object.values(ButtonTypes)),
}

Button.defaultProps = {
    disabled: false,
    label: '',
    onClick: () => console.log('no click handler specified'),
    size: ButtonSizes.MEDIUM,
    theme: ButtonThemes.LIGHT,
    type: ButtonTypes.PRIMARY,
}

export default Button
