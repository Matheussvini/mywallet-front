import { useContext, useState } from "react";
import styled from "styled-components";
import FormButton from "../../components/FormButton/FormButton";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import UserContext from "../../components/Context/context";
import { useNavigate } from "react-router-dom";

export default function TransactionForm({ type }) {
  const [disabled, setDisabled] = useState(false);
  const tipo = type === "entrada" ? "entry" : "exit";
  const [form, setForm] = useState({
    date: "",
    value: "",
    description: "",
    type: tipo,
  });
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  function handleForm(e) {
    const { name, value } = e.target;
    if (name === "value") {
      setForm({ ...form, [name]: Number(value).toFixed(2) });
    } else {
      setForm({ ...form, [name]: value });
    }
  }

  function registration(e) {
    e.preventDefault();
    setDisabled(true);

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios.post(`${BASE_URL}/transacoes`, form, config).then((res) => {
      alert(res.data.message);
      navigate("/transacoes");
    });
  }

  return (
    <Form onSubmit={registration}>
      <input
        name="date"
        type="date"
        onChange={handleForm}
        required
        disabled={disabled}
      />

      <input
        name="value"
        type="number"
        step=".01"
        placeholder="Valor"
        onChange={handleForm}
        required
        disabled={disabled}
      />
      <input
        name="description"
        type="text"
        placeholder="Descrição"
        onChange={handleForm}
        required
        disabled={disabled}
      />

      <FormButton disabled={disabled}>
        {disabled ? (
          <ThreeDots
            height="45px"
            radius="9"
            color="#FFF"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : (
          `Salvar ${type}`
        )}
      </FormButton>
    </Form>
  );
}

const Form = styled.form``;
