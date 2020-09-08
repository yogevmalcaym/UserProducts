import React from 'react';
import styled from 'styled-components';
import * as styles from './styles';

export const Button = styled(({className, children, onClick, type, form, value}) =>
    <button {...{className, onClick, type, form, value}}>{children}</button>
)`${styles.Button}`;
