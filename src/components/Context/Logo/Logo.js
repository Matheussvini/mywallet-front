import styled from "styled-components"
import logo from '../../../assets/images/logo.png'

export default function Logo() {
    return <Img src={logo} alt="Logomarca My Wallet" />
}

const Img = styled.img`
    margin-top: 25vh;
    width: auto;
`