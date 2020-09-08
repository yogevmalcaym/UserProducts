import React from 'react';
import * as styles from './styles';
import styled from 'styled-components';

export const InputLabel = styled(({className, text}) =>
    <label {...{className}} >{text}</label>
)`${styles.InputLabel}`;
