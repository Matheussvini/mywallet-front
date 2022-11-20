import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import UserContext from "../../components/Context/context";

export default function HomePage() {

    const navigate = useNavigate();
    const {user} = useContext(UserContext);

    useEffect(() => {
      if(user.length !== 0){
        navigate('/transacoes')
      }
    }, [])
    
    
    return (
        <Container>

        </Container>
    )
}

const Container = styled.div`
    background-color: aquamarine;
`