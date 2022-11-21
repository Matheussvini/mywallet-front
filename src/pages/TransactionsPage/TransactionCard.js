import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../components/Context/context";
import { BASE_URL } from "../../constants/urls";

export default function TransactionCard({
  transaction,
  arrTransactions,
  setArrTransactions,
}) {
  const { user, change, setChange } = useContext(UserContext);

  function deleteTransaction() {
    const confirmation = window.confirm(
      `Deseja realmente excluir a transação "${transaction.description}"?`
    );
    if (confirmation) {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      axios
        .delete(`${BASE_URL}/transacoes/${transaction._id}`, config)
        .then(() => {
          setChange(!change);
          setArrTransactions(
            arrTransactions.filter((item) => item._id !== transaction._id)
          );
        })
        .catch((err) => {
          alert("Erro: ", err.response.data);
        });
    }
  }

  return (
    <TransactionBox>
      <Box>
        <DateBox>{transaction.date}</DateBox>
        <DescriptionBox>{transaction.description}</DescriptionBox>
      </Box>
      <Box>
        <ValueBox type={transaction.type}>
          {transaction.value?.toFixed(2)}
        </ValueBox>
        <DeleteBox onClick={deleteTransaction}>X</DeleteBox>
      </Box>
    </TransactionBox>
  );
}

const TransactionBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  line-height: 18.78px;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
`;
const DateBox = styled.div`
  color: #c6c6c6;
`;
const DescriptionBox = styled.div`
  margin-left: 15px;
  color: #000000;
`;
const ValueBox = styled.div`
  color: ${(props) => (props.type === "entry" ? "#03AC00" : "#C70000")};
`;
const DeleteBox = styled.p`
  margin-left: 15px;
  color: #c6c6c6;
  cursor: pointer;
  &:hover{
    opacity: 60%;
    color: #C70000 ;
  }
`;
