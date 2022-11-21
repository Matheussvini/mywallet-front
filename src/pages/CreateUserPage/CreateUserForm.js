import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../../constants/urls";
import { ThreeDots } from "react-loader-spinner";
import FormButton from "../../components/FormButton/FormButton";

export default function CreateUserForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [disabled, setDisabled] = useState(false);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [warning, setWarning] = useState("");
  const navigate = useNavigate();

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "password") {
      setPassword(value);
      if (value !== password2) {
        return setWarning("As senhas não são iguais!");
      }
      setWarning("")
    }
  }

  function confirmPassword(e) {
    const { value } = e.target;
    setPassword2(value);
    if (value !== password) {
      return setWarning("As senhas não são iguais!");
    }
    setWarning("");
  }

  function registration(e) {
    e.preventDefault();
    setDisabled(true);
    confirmPassword(e);

    axios
      .post(`${BASE_URL}/sign-up`, form)
      .then((res) => {
        alert(res.data);
        navigate("/login");
      })
      .catch((err) => {
        setDisabled(false);
        err.response.data.details
          ? alert(err.response.data.details[0])
          : alert(err.response.data.message);
      });
  }

  return (
    <Form onSubmit={registration}>
      <input
        name="name"
        type="text"
        placeholder="nome"
        onChange={handleForm}
        required
        disabled={disabled}
      />

      <input
        name="email"
        type="email"
        placeholder="email"
        onChange={handleForm}
        required
        disabled={disabled}
      />

      <input
        name="password"
        type="password"
        placeholder="senha"
        value={password}
        onChange={handleForm}
        required
        disabled={disabled}
      />

      <input
        name="confirmPassword"
        type="password"
        placeholder="confirme a senha"
        value={password2}
        onChange={confirmPassword}
        required
        disabled={disabled}
      />

      <Text>{warning}</Text>

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
          "Cadastrar"
        )}
      </FormButton>
    </Form>
  );
}

const Form = styled.form`
  max-width: 90%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.p`
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 15px;
  line-height: 17.61px;
  color: red;
  text-decoration: underline;
`;
