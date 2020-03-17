import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';
import { ButtonTypes } from '../../constants/button';

export default {
    component: Button,
    title: 'Button',
    excludeStories: /.*Data$/,
}

export const buttonData = {
    label: 'Click Me!',
}

export const actionsData = {
    onClick: action('onClick'),
}

export const Primary = () => (
    <Button { ...buttonData } type={ButtonTypes.PRIMARY} { ...actionsData } />
)

export const Secondary = () => (
    <Button { ...buttonData } type={ButtonTypes.SECONDARY} { ...actionsData } />
)

export const Tertiary = () => (
    <Button { ...buttonData } type={ButtonTypes.TERTIARY} { ...actionsData } />
)