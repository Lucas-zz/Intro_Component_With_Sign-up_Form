import AboutText from "./assets/components/AboutText.js";
import FormContainer from "./assets/components/FormContainer/index.js";
import { GlobalStyle, Container } from "./style";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <AboutText></AboutText>
                <FormContainer></FormContainer>
            </Container>
        </>
    );
}