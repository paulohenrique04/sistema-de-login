import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 50%;
  margin: 50px auto;
`;

export const Form = styled.form`
  width: 25%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 12px;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const BtnExclude = styled.button`
  background-color: #f00;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f55;
  }
`;