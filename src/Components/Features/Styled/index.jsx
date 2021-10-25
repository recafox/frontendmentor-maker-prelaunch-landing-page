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

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: column;
    width: 573px;
    margin-top: 109px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 100%;
    margin-top: 144px;

    .feature-card, .feature-card:last-of-type {
      margin-right: auto;
    }
  }
`;

export const StyledImgCard = styled.div`
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
    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
      margin-bottom: 0;
      height: 124px;
      width: 120px;
      flex-shrink: 0;
      margin-right: 55px;
      img {
        width: 55px;
      }
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      margin-right: 0;
      margin-bottom: 32px;
    }
`;

export const StyledTextGroup = styled.div`
  h4 {
    color: ${({ theme }) => theme.colors.title};
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 23px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 2;
    h4 {
      margin-bottom: 11px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    text-align: center;
  }
`;

export const StyledCard = styled.div`
  width: 255px;
  margin-bottom: 48px;
  margin-top: ${({ isEven }) => isEven ? '48px' : ''};
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-top: 0;
    margin-bottom: 40px;
    margin-left: ${({ isEven }) => isEven ? '' : '58px'};
    flex-direction: row;
    width: unset;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 327px;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    margin-bottom: 56px;
  
  }

`;