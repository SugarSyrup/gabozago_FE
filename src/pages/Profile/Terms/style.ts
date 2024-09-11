import styled from 'styled-components';

export const Contents = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 26px;
`;

export const LocationAccessToggleWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ToggleSwitch = styled.div<{ isActive: boolean }>`
  width: 40px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 20px;
  position: relative;

  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.blue.primary : theme.colors.gray.tertiary};

  transition: all 0.3 linear;
  div {
    width: 18px;
    height: 18px;
    margin-top: 3px;
    border-radius: 100%;
    background-color: white;

    position: absolute;
    left: ${({ isActive }) => !isActive && '3px'};
    right: ${({ isActive }) => isActive && '3px'};
  }
`;

export const TermsLink = styled.span`
  margin-top: -20px;
  color: ${({ theme }) => theme.colors.blue.primary};
  text-decoration: underline;
  cursor: pointer;
`;
