import styled, { keyframes } from "styled-components";

export const StyledHero = styled.div`
  width: 100%;
  height: 459px;
  margin-top: 230px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-top: 140px;
  }

`;

export const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  width: 1553px;
  height: 459px;
  display: flex;
  justify-content: space-around;
  

  img {
    height: 100%;
    flex-shrink: 0;
  }
  
  img:nth-of-type(1) {
    width: 408px;
  }

  img:nth-of-type(2) {
    height: 378px;
    width: 544px;
  }

  img:last-of-type {
    width: 396px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 1108px;
    height: 357px;
    img:nth-of-type(1) {
      width: 314px;
    }
    img:nth-of-type(2) {
      height: 268px;
      width: 386px;
    }

    img:last-of-type {
      width: 317px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    img {
      display: none;
    }
    width: 100%;
    height: 233px;
    background-image: url('./assets/illustration-hero-mobile.png');
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
`;

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: ${({ theme }) => theme.colors.title};
    font-size: 48px;
    font-weight: 800;
    text-align: center;
    line-height: 56px;
    margin-top: 70px;
    margin-bottom: 24px;

    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
      font-size: 32px;
      line-height: 40px;
    }

    em {
      color: ${({ theme }) => theme.colors.lightBlue};
      font-style: normal;
    }
  }

  p {
    width: 540px;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    h2 {
      margin-top: 300px;
      width: 327px;
    }
    br {
      display: none;
    }
    p {
      width: 327px;
    }
  }
`;

const bouncing = keyframes`
  from {
    transform: translateY(0px) translateX(-50%);
  }
  to {
    transform: translateY(100%) translateX(-50%);
  }


`;

export const StyledCTA = styled.div`
  margin-top: 64px;
  border: 2px solid ${({ theme }) => theme.colors.lightBlue};
  height: 42px;
  width: 26px;
  border-radius: 13px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-top: 32px;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 11px;
    left: 50%;
    transform: translateX(-50%);
    border: 2px solid ${({ theme }) => theme.colors.lightBlue};
    border-radius: 50%;
    height: 6px;
    width: 6px;
    animation: ${bouncing} 0.3s ease-in infinite alternate;
  }
`;