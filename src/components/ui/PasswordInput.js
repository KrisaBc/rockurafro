import { useState } from "react";
import styled from "styled-components";
import { Input } from "./Input"
import { Icon } from "./Icon"
import { Container } from "./Container"

const InputContainer = styled(Container)`
  height: 36px;
  border-radius: 8px;
  border: solid 1px ${props => props.theme.colors.gray}; 
  margin-bottom: 15px;
`

const InputNoBorder = styled(Input)`
border: none;
margin: 0;
`

export default function PasswordInput() {
    const [passwordShown, setPasswordShown] = useState(false)

    const toggleShowPassword = () => {
        setPasswordShown(!passwordShown)
    }

    return (
        <InputContainer justifyContent="space-between" direction="row" >
            <InputNoBorder
                width="180px"
                type={passwordShown ? "text" : "password"}
                placeholder="password"
                required
            />

            <Icon
                onClick={toggleShowPassword}
                src={passwordShown ?
                    "./images/visibilityOn.png" :
                    "./images/visibilityOff.png"}
                alt="password-visibility"
                height="20px"
                padding="8px"
            />
        </InputContainer>
    )
}
