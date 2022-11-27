import styled from 'styled-components'

export const Container = styled.div`
width: ${props => props.width};
height: ${props => props.height};
margin-right: ${props => props.marginR ? props.marginR : 0};
margin-left: ${props => props.marginR ? props.marginR : 0};
display: flex;
flex-direction: ${props => (props.direction ? props.direction : 'column')};
justify-content: ${props => (props.justifyContent ? props.justifyContent : 'flex-start')};
align-items: ${props => props.alignItems};
`