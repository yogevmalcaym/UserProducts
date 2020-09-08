import React from 'react';
import { css } from 'styled-components';
import MediaQuery from 'react-responsive';

const phoneMaxWidth = 1000 ;

export const getColor = (key, tone = 'main') => ({theme}) => theme.colors[key][tone];

export const PhoneMediaQuery = ({children}) => <MediaQuery {...{maxDeviceWidth: phoneMaxWidth}}>{children}</MediaQuery>;

export const PCMediaQuery = ({children}) => <MediaQuery {...{minDeviceWidth: phoneMaxWidth}}>{children}</MediaQuery>;

export const isPhone = style => () => css`
    @media (max-width: ${phoneMaxWidth}px) {
        ${style};
    }
`;
