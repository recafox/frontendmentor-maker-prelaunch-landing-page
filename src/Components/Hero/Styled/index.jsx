import styled from "styled-components";

export const StyledHero = styled.div`
  width: 100%;
  height: 459px;
  margin-top: 230px;
  position: relative;
`;

export const StyledBackground = styled.div`
  position: absolute;
  top: 0;
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

    em {
      color: ${({ theme }) => theme.colors.lightBlue};
      font-style: normal;
    }
  }

  p {
    width: 540px;
    text-align: center;
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
  }
`;