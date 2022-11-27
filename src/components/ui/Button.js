import styled from 'styled-components'

export const Button = styled.button`
    font-family: ${props => props.theme.fonts.body};
    background-color: ${props => props.theme.colors.green};
    border-style: none;
    width: ${props => props.width || "250px"};
    height: 40px;
    border-radius: 8px;
    font-size: 16px;
    color: white;
    padding: 0;
    cursor: pointer;
`

