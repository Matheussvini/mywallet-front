import styled from "styled-components";

export default function FormButton({ children, disabled }) {
  return <Button disabled={disabled}>{children}</Button>;
}

const Button = styled.button`
  width: 300px;
  height: 45px;
  border-radius: 5px;
  border: none;
  background-color: #7b4397;
  /* background-color: #b08ec1; */
  color: #ffffff;
  text-align: center;
  font-size: 21px;
  line-height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
