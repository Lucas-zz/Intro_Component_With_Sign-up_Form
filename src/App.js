import AboutText from "./assets/components/AboutText.js";
import RightContainer from "./assets/components/RightContainer/index.js";
import { GlobalStyle, Container } from "./style";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <AboutText></AboutText>
                <RightContainer></RightContainer>
            </Container>
        </>
    );
}