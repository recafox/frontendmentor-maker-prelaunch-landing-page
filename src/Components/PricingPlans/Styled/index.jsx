import styled from "styled-components";

export const PlanContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 202px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 72px;

  > div {
    margin-right: 30px;
  }
`;


export const StyledPlanCard = styled.div`
  background: ${({ theme, tone }) => tone === "darkBlue" ? theme.colors.darkerBlue : theme.colors.lightBlue };
  width: 445px;
  height: ${({ isLarger }) => isLarger ? '449px' : "425px"};
  border-radius: 8px;
  position: relative;
  padding: 49px 38px 0 38px;
  display: flex;
  flex-direction: column;
  color: ${({ tone }) => tone === "darkBlue" ? '#fff' : '#000' };

  .icon {
    width: 46px;
    position: absolute;
    top: -23px;
  }


  .price {
    display: flex;
    height: 55px;
    align-items: center;
    p {
      font-size: 40px;
      line-height: 54px;
      font-weight: 800;
    }

    small {
      color: ${({ theme }) => theme.colors.bg};
      font-size: 15px;
      line-height: 25px;
      font-weight: 200;
      opacity: 0.6;
      margin-left: 8px;
    }
  }

  h5 {
    font-size: 18px;
    line-height: 25px;
    font-weight: 800;
    margin-bottom: 19px;
  }

  ul {
    margin-top: 19px;
  }

  li {
    display: flex;
    align-items: center;
    font-size: 15px;
    line-height: 25px;
    margin-bottom: 12px;

    &:last-of-type {
      margin-bottom: 0;
    }
    img {
      margin-right: 15px;
      height: 8px;
    }
  }
`;