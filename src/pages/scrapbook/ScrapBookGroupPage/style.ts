import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px 20px;
  background-color: ${({ theme }) => theme.white};
`;
export const BackButtonContainer = styled.button`
  position: absolute;
  left: 20px;
  background-color: transparent;
  padding: 0;
  border: 0;
  cursor: pointer;
`;

export const JournalList = styled.ol`
  padding-top: 60px;
`;
