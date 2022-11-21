import { Link } from "react-router-dom";
import styled from "styled-components";
import logoFull from "../../assets/images/logo-full.png";
import { Container } from "../../assets/styles/GlobalStyle";

export default function HomePage() {
  return (
    <Container>
      <Logo src={logoFull} alt="" />
      <Link to="/login">
        <Login>Entrar</Login>
      </Link>
    </Container>
  );
}

const Logo = styled.img`
  position: absolute;
  top: 0;
  height: 100vh;
  margin: 0 auto;
  max-width: 100%;
`;
const Login = styled.button`
  position: absolute;
  top: 80%;
  left: calc(50% - 150px);
  width: 300px;
  height: 45px;
  border-radius: 50px;
  border: none;
  background-image: linear-gradient(to right, #7b4296, #d82533);
  color: #ffffff;
  font-size: 22px;
  line-height: 26px;
  font-weight: 700;
`;
