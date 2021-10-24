import styled from "styled-components";

export const StyledButton = styled.button`
  height: 48px;
  color: #000;
  border-radius: 24px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 18px;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  outline: none;
  border: 2px solid transparent;
  cursor: pointer;
  font-weight: 800px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg};
    border-color: ${({ theme }) => theme.colors.lightBlue};
    color: #fff;
  }
`;