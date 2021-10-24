import styled from "styled-components";

export const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;

  &.has-error {
    input {
      border-color: ${({ theme }) => theme.colors.error};
    }
    span {
      opacity: 1;
    }
  }
  input {
    height: 48px;
    width: 320px;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.colors.darkerBlue};
    border: 2px solid transparent;
    box-sizing: border-box;
    padding-left: 12px;
    line-height: 48px;
    color: #fff;

    ::placeholder {
      color: ${({ theme }) => theme.colors.text};
    }

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.lightBlue};
    }
  }
  span {
      display: block;
      opacity: 0;
      color: ${({ theme }) => theme.colors.error};
      font-size: 12px;
      line-height: 25px;
      margin-left: 18px;
    }
`;