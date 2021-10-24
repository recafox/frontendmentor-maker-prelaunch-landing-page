import styled from "styled-components";

export const StyledFeaturesWrapper = styled.div`
  margin-top: 202px;
  display: flex;
  justify-content: center;

  .feature-card {
    margin-right: 30px;
  }
  .feature-card:last-of-type {
    margin-right: 0;
  }
`;

export const StyledCard = styled.div`
  width: 255px;
  margin-top: ${({ isLower }) => isLower ? '48px' : ''};
  display: flex;
  flex-direction: column;

  > div {
    height: 160px;
    width: 164px;
    background-color: ${({ theme }) => theme.colors.darkerBlue};
    border-radius: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 48px;

    img {
      width: 80px;
    }
  }
  h4 {
    color: ${({ theme }) => theme.colors.title};
    font-size: 18px;
    line-height: 25px;
    font-weight: 800;
    margin-bottom: 23px;
  }

`;