import React from 'react';
import styled from 'styled-components';
import * as styles from './styles';
import * as consts from './consts';
import {Button} from 'common-components'

export default styled(({className, onContinue, onCancel}) =>
    <div {...{className}}>
        <div className="box">
            <h2>{consts.QUESTION}</h2>
            <div className="buttons">
                <Button {...{className: "continue", onClick: onContinue}} >{consts.YES}</Button>
                <Button {...{className: "cancel", onClick: onCancel}}>{consts.NO}</Button>
            </div>
        </div>
    </div>
)`${styles.DeleteValidation}`;
