import styled from "styled-components";

const Button = styled.button`
    width: 100%;

    padding: 22px;

    border-radius: 10px;
    box-shadow: ${props => props.shadow === 'inset' ? '0 -5px inset rgba(0 ,0 , 0, 0.15)' : '0 10px rgba(0 ,0 , 0, 0.15)'};

    font-size: 20px;
    font-weight: ${props => props.strong === true ? '600' : 'normal'};
    ${props => props.spacing === true && 'letter-spacing: 2px;'}
    text-align: center;

    color: #FFF;
    background-color: ${props => props.color};

    cursor: pointer;
`

export default Button;