import { StyledFrase } from "./EscenaStyled";

const Frase = (props) => {
    return <StyledFrase active={props.active}>{props.string}</StyledFrase>
}

export default Frase;