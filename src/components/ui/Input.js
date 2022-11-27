import styled from 'styled-components'

export const Input = styled.input`
    height: 35px;
    width: ${props => props.width ? props.width : "220px"};
    border-radius: 8px;
    border: solid 1px ${props => props.theme.colors.gray}; 
    margin: 0 0 15px 0;
    padding: 0 0 0 10px;
    box-shadow: 0 0 0 30px white inset !important;
    font-family: ${props => props.theme.fonts.body}
`

