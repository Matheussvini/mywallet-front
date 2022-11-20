import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import { Container } from "../../assets/styles/GlobalStyle";
import UserContext from "../../components/Context/context";
import Logo from "../../components/Context/Logo/Logo";
import LoginForm from "./LoginForm";

export default function LoginPage() {

    

  const navigate = useNavigate();
    const {user} = useContext(UserContext);

    useEffect(() => {
      if(user.length !== 0){
        navigate('/transacoes')
      }
    }, [])
    
    return (
        <Container>
            <Logo />
            <LoginForm />
            <Link to='/cadastro'>
              <Text>Novo por aqui? Cadastre-se!</Text>
            </Link>

        </Container>
    )
}

const Text = styled.p`
  font-family: Raleway;
  margin-top: 25px;
  font-weight: 700;
  font-size: 15px;
  line-height: 17.61px;
  color: #FFFFFF;
  text-decoration: underline;
`