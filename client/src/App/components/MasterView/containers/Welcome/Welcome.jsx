import classnames from 'classnames';
import {} from 'common-components';
import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import * as styles from './styles';
import {Input, InputLabel, Button} from 'common-components';
import * as consts from './consts';
import * as helpers from './helpers';

export default styled(({className, navigate, setError}) => {

        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [isLoginMode, setIsLoginMode] = useState(true);

        const usernameChangeHandler = useCallback(e =>
                setUsername(e.target.value),
            [setUsername]
        )

        const passwordChangeHandler = useCallback(e =>
                setPassword(e.target.value)
            , [setPassword])

        const onSubmit = useCallback(async (e) => {
            e.preventDefault();

            if (isLoginMode) {
                const response = await helpers.loginUser({username, password})
                if (response.error) return alert(response.message);
                if (response.clientError) setError(response.clientError);

                navigate(`/products/${response.userData.username}`);
            } else {
                const response = await helpers.signupUser({username, password})
                if (response.error) alert(response.message);
                if (response.clientError) setError(response.clientError);
                navigate(`/products/${username}`);
            }

        }, [isLoginMode, username, password])

        const toggleClickedHandler = useCallback(() =>
                setIsLoginMode(!isLoginMode)
            , [isLoginMode])

        return <div {...{className: classnames(className, 'welcome')}}>
            <div className="login-box">

                <h1>{isLoginMode ? consts.LOGIN : consts.SIGNUP}</h1>
                <form {...{onSubmit}}>
                    <InputLabel text={consts.NAME_LABEL}/>
                    <Input{...{required: true, placeholder: "username", value: username, onChange: usernameChangeHandler}}/>
                    <InputLabel text={consts.PASS_LABEL}/>
                    <Input {...{required: true, type: "password", value: password, onChange: passwordChangeHandler}}/>
                    <Button>{isLoginMode ? consts.LOGIN : consts.SIGNUP}</Button>
                    <span{...{className: "login-signup-toggle", onClick: toggleClickedHandler}}>
                        {isLoginMode ? consts.SWITCH_TO_SIGNUP : consts.SWITCH_TO_LOGIN}
                    </span>
                </form>

            </div>

        </div>
    }
)`${styles.Main}`;
