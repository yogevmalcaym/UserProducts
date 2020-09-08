import React from 'react';
import * as styles from './styles';
import styled from 'styled-components';

export const Input = styled(({className, placeholder, type = "text", onChange, required, name, min, value}) =>
    <input {...{className, placeholder, type, onChange, required, name, min, value}} />
)`${styles.Input}`;
