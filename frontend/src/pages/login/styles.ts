import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  width: 100vw;
  height: 100vh;
`

export const TitleLogin = styled.span`
	display: block;
  font-size: 30px;
  color: #3b3450;
  line-height: 1.2;
  text-align: center;
  margin-top: 2rem;
`

export const FormLogin = styled.form`
  display: flex;
  align-items: center;
  width: 500px;
  height: 20rem;
  background: #ffffff;
  border-radius: 8px;
  flex-direction: column;
  gap: 2.4rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`
