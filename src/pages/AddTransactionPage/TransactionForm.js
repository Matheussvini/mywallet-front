import { useState } from "react";
import styled from "styled-components";
import FormButton from "../../components/FormButton/FormButton";
import { ThreeDots } from "react-loader-spinner";

export default function TransictionForm({ type }) {
  const [disabled, setDisabled] = useState(false);

  function handleForm(e) {

  }

  function registration(){
    
  }

  return (
    <Form onSubmit={registration}>
      <label for="date">Data</label>
      <input
        name="date"
        type="text"
        onChange={handleForm}
        required
        disabled={disabled}
      />

      <input
        name="value"
        type="number"
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
