import { Button } from '@mui/material';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login() {

    const signIn = () => {
        try {
            auth.signInWithPopup(provider)
        } catch (error) {
            console.log(error);
        }
       
    }

  return (
    <Container>
     <LoginContainer>
        <Logo 
            src="https://cdn-icons-png.flaticon.com/512/124/124034.png?w=740&t=st=1655185586~exp=1655186186~hmac=7c42328dc96115aa97757b7813367783d665d6395e1cd4d01719d9eb3b976f5f"
            alt="logo"
        />
        <Button onClick={signIn} variant="outlined">Sign in with Google</Button>
     </LoginContainer>
    </Container>
  )
}

export default Login

const Logo = styled.img`
height: 200px;
width: 200px;
border-radius: 100%;
margin-bottom: 50px;
`;

const Container = styled.div`
display: grid;
place-items: center;
height: 100vh;
`;


const LoginContainer = styled.div`
padding: 100px;
display: flex;
flex-direction: column;
align-items: center;
background: whitesmoke;
border-radius: 5px;
box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;