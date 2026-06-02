import styled from 'styled-components';
import Check from '../icons/Check';
import Cancel from '../icons/Cancel';

const StyledAlert = styled.div`
color: white;
padding: 8px;
display: flex;
align-items: center;
gap: 8px;
background-color: ${(props) => { return props.type === "success" ? "green" : "red"}}
`

function AlertV3({text, type}){
 return <StyledAlert type={type}>
    {type === "success" ? <Check /> : <Cancel />}
    <p>{text}</p>
 </StyledAlert>
}

export default AlertV3;