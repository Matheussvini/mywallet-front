import { useParams } from "react-router-dom"
import styled from "styled-components"
import { Container, Title } from "../../assets/styles/GlobalStyle"
import TransactionForm from "./TransactionForm";

export default function AddTransactionPage() {
    const {type} = useParams();
    
    return (
        <Container>
            <Title>
                {`Nova ${type}`}
            </Title>
            <TransactionForm type={type} />
        </Container>
    )
}
