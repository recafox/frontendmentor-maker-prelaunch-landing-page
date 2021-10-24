import styled from "styled-components";

export const StyledParagraph = styled.p`
  font-size: 15px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 200;
`;