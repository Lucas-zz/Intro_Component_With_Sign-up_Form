import styled from "styled-components";

const Title = styled.h1`
    width: 100%;

    font-size: 32px;
    font-weight: 700;
    line-height: 1;
    text-align: left;

    color: #FFF;
`

const About = styled.p`
    width: 100%;

    font-size: 16px;
    font-weight: normal;
    line-height: 1;
    text-align: left;
    
    color: #FFF;
`
const Container = styled.div`
    width: 100%;

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