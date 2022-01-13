import Button from "../Button";
import Input from "../Input";
import TermsAndServices from "../TermsAndServices";
import { Container } from "./style";

export default function FormContainer() {
    return (
        <Container>
            <form>
                <Input
                    type='text'
                    placeholder="First Name"
                    required
                />
                <Input
                    type='text'
                    placeholder="Last Name"
                    required
                />
                <Input
                    type='email'
                    placeholder="Email Address"
                    required
                />
                <Input
                    type='password'
                    placeholder="Password"
                    required
                />

                <Button spacing={true} color="#37CC89" shadow='inset' strong={true}>CLAIM YOUR FREE TRIAL</Button>
            </form>
            <TermsAndServices>By clicking the button, you are agreeing to our <mark> Terms and Services </mark></TermsAndServices>
        </Container>
    );
}