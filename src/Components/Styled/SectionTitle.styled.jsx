import styled from 'styled-components';

export const StyledSectionTitle = styled.h4`
  color: ${({ theme }) => theme.colors.title};
  font-weight: 800;
  font-size: 32px;
  line-height: 44px;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media(max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    text-align: center;
  }
`;