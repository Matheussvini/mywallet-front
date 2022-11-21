import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container, Title } from "../../assets/styles/GlobalStyle";
import UserContext from "../../components/Context/context";
import { HiOutlineLogout } from "react-icons/hi";
import { BASE_URL } from "../../constants/urls";
import TransactionCard from "./TransactionCard";
import AddTransactionCard from "./AddTransactionCard";

export default function TransactionsPage() {
  const navigate = useNavigate();
  const { user, change } = useContext(UserContext);
  const [arrTransactions, setArrTransactions] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user.length === 0) {
      return navigate("/login");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .get(`${BASE_URL}/transacoes`, config)
      .then((res) => {
        setArrTransactions(res.data);
      })
      .catch((err) => {
        setError(err.message);
        alert(err.response.data);
      });
  }, [change]);

  function logout() {
    const confirmation = window.confirm("Deseja realmente sair?");
    if (confirmation) {
      localStorage.clear();
      window.location.reload();
    }
  }

  if (error !== null) {
    return <div>Erro {error}! Tente de novo</div>;
  }

  if (error === null && !arrTransactions) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
      <Title>
        Olá, {user.name}
        <LogoutIcon>
          <HiOutlineLogout onClick={logout} />
        </LogoutIcon>
      </Title>
      <BoxTransactions>
        {arrTransactions?.length === 0 && (
          <Text>
            Não há registros de <br /> entrada ou saída
          </Text>
        )}
        {arrTransactions?.map((t, i) => (
          <TransactionCard
            transaction={t}
            key={i}
            arrTransactions={arrTransactions}
            setArrTransactions={setArrTransactions}
          />
        ))}
      </BoxTransactions>
      <AddTransactionCard />
    </Container>
  );
}

const LogoutIcon = styled.div`
  cursor: pointer;
  font-size: 35px;
  :hover {
    opacity: 60%;
  }
`;
const BoxTransactions = styled.div`
  margin: 20px 0;
  min-width: 40%;
  max-width: 100%;
  min-height: 500px;
  background-color: #ffffff;
  color: #868686;
  display: flex;
  flex-direction: column;
  padding: 25px 15px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Text = styled.h3`
  font-size: 20px;
  line-height: 23.48px;
`;
