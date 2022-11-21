import { useParams } from "react-router-dom"
import styled from "styled-components"
import { Container, Title } from "../../assets/styles/GlobalStyle"

export default function AddTransactionPage() {
    const {type} = useParams();
    
    return (
        <Container>
            <Title>
                {`Nova ${type}`}
            </Title>
            <TransictionForm type={type} />
        </Container>
    )
}
