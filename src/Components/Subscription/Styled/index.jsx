import styled from "styled-components";

export const StyledSubscriptionWrapper = styled.div`
  margin-top: 202px;
  margin-bottom: 117px;
  background-image: url('./assets/bg-footer-squiggle.svg');
  background-size: 584px 80px;
  background-position-y: 0;
  background-repeat: no-repeat;
  height: 228px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 144px;

    h4 {
      width: 327px;
    }
  }
`;

export const StyledInputWrapper = styled.div`
  margin-top: 42px;
  display: flex;

  button {
    margin-left: 16px;
    font-weight: 800;
  }
  @media(max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    flex-direction: column;

    input, button {
      width: 327px;
    }

    button {
      margin-left: 0;
    }
  }
`;