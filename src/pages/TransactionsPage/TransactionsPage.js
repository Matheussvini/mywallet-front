import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Container } from "../../assets/styles/GlobalStyle"
import UserContext from "../../components/Context/context";

export default function TransactionsPage() {

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

