import { Button, Container, Footer, Image, Paragraph } from "../components/ui";

export default function Landing() {

    return <Container width="100%" height="100%" justifyContent="space-between">
        <Container alignItems="center">
            <Image width="130px" margin="60px" src="./images/appLogo.png" alt="app-logo" />
            <Paragraph padding="30px">
                If you don't want to register, please go to LogIn and use the guest profile already configurated.
                <br></br>If you're already register use your account
            </Paragraph>
            <Container width="75%" direction="row" justifyContent="space-around" marginR="25%" marginL="25%">
                <Button width="120px">Regsiter</Button>
                <Button width="120px">Login</Button>
            </Container>
        </Container>

        <Footer>
            <Container width="100%" direction="row" justifyContent="center" >
                <Paragraph padding="5px">About Us</Paragraph>
                <Paragraph padding="5px">Contact</Paragraph>
            </Container>
            <Container width="100%" direction="row" justifyContent="center">
                <Image
                    height="15px"
                    padding="5px"
                    src="https://st2.depositphotos.com/1032749/8625/v/450/depositphotos_86257870-stock-illustration-copyright-symbol-icon.jpg"
                    alt="copyright" />
                <Paragraph padding="5px">RockYorAfro by LePetiteDeveloppeur</Paragraph>
            </Container>
        </Footer>
    </Container>
}
