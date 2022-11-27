import { Button, Container, Form, Image, Input, PasswordInput, Paragraph, StyledLink, Footer } from "../components/ui";

export default function Register() {

    return <Container width="100%" height="100%" justifyContent="space-between">
        <Container alignItems="center">
        <Image width="130px" margin="60px" src="./images/appLogo.png" alt="app-logo" />   
       
        <Form>
            <Input type="text" placeholder="nickname" required />
            <Input type="text" placeholder="email" required />
            <PasswordInput />
            <Button width="232px">Login</Button>
        </Form>

        <Paragraph width="200px" margin="15px">Do you already have an account? <br />
            <StyledLink to="">Login</StyledLink>
        </Paragraph>
        </Container>

        <Footer>
            <Container width="100%" direction="row" justifyContent="center" >
                <Paragraph padding="5px">About Us</Paragraph>
                <Paragraph padding="5px">Contact</Paragraph>
            </Container>
            <Container width="100%" direction="row" justifyContent="center">
                <Image height="15px" padding="5px" src="https://st2.depositphotos.com/1032749/8625/v/450/depositphotos_86257870-stock-illustration-copyright-symbol-icon.jpg" alt="copyright" />
                <Paragraph padding="5px">RockYorAfro by LePetiteDeveloppeur</Paragraph>
            </Container>
        </Footer>
    </Container>
}
