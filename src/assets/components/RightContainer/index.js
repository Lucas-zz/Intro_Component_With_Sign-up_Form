import Button from "../Button";
import FormContainer from "../FormContainer";
import { Container } from "./style";

export default function RightContainer() {
    return (
        <Container>
            <Button spacing={false} color="#5D54A3" shadow='outset'>
                <strong>Try it free 7 days</strong> then $20/mo, thereafter
            </Button>
            <FormContainer />
        </Container>
    );
}