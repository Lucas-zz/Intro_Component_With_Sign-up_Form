import styled from "styled-components";

const Title = styled.h1`
    width: 100%;

    font-size: 4em;
    font-weight: 700;
    line-height: 1;
    

    color: #FFF;
`

const About = styled.p`
    width: 100%;

    font-size: 1.3em;
    font-weight: 500;
    line-height: 1.7;
    
    color: #FFF;

    opacity: 0.9;
`
const Container = styled.div`
    width: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    gap: 20px;
`

export {
    Title,
    About,
    Container,
}