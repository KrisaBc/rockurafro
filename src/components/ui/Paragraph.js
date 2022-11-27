import styled from 'styled-components'

export const Paragraph = styled.p`
text-align: center;
width: ${props => props.width};
color: ${props => props.color};
margin: ${props => props.margin ?? 0};
padding: ${props => props.padding ?? 0};
`

