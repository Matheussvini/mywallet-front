import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../components/Context/context";

export default function TransactionCard({ transaction }) {
  const { user } = useContext(UserContext);

  return (
    <TransactionBox>
      <Box>
        <DateBox>{transaction.date}</DateBox>
        <DescriptionBox>{transaction.description}</DescriptionBox>
      </Box>
      <ValueBox type={transaction.type}>
        {transaction.value.toFixed(2)}
      </ValueBox>
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
`
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
const TypeBox = styled.div``;
