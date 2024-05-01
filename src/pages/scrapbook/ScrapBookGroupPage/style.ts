import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
  padding: 40px 20px 20px;
  background-color: ${({ theme }) => theme.white};
`;

export const TabBarContainer = styled.div`
  margin-top: 10px;
  padding: 0 20px;
  position: relative;

  &::before {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.gray04};
  }
`;

export const HeadingContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 24px;
`;

export const BackButtonContainer = styled.button`
  position: absolute;
  top: 40px;
  left: 20px;
  background-color: transparent;
  padding: 0;
  border: 0;
  cursor: pointer;
`;

export const JournalList = styled.ol``;
