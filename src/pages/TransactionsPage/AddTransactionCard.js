import styled from "styled-components";
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../components/Context/context";

export default function AddTransactionCard({ type }) {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);


    const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
    };

  function addEntry() {
    navigate("/adiciona-transacao/entrada")
  }

  function addExit() {
    navigate("/adiciona-transacao/saída")

  }

  return (
    <ContainerAdd>
      <Box onClick={addEntry}>
        <Icon>
          <IoMdAddCircleOutline />
        </Icon>
        Nova <br /> entrada
      </Box>
      <Box onClick={addExit}>
        <Icon>
          <IoMdRemoveCircleOutline />
        </Icon>
        Nova <br /> saída
      </Box>
    </ContainerAdd>
  );
}

const ContainerAdd = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 40%;
  margin-top: 20px;
`;
const Icon = styled.p`
  font-size: 40px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: calc(50% - 20px);
  height: 135px;
  color: #ffffff;
  font-weight: 700;
  font-size: 23px;
  line-height: 24px;
  background-color: #7b4296;
  opacity: 85%;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: left;
  cursor: pointer;
  &:hover {
    opacity: 40%;
  }
`;
