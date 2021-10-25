import styled from "styled-components";

export const StyledLogo = styled.a`
  display: block;
  background-image: url('./assets/logo.svg');
  height: 35px;
  width: 120px;
  text-indent: 101%;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  left: 165px;
  top: 81px;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    left: 39px;
    top: 48px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
  }
`;