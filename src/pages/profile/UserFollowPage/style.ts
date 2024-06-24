import styled from 'styled-components';

export const FixedHeader = styled.header`
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 2;

  padding-top: 40px;
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;

  background-color: white;
`;

export const Header = styled.div`
  width: 100%;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;

    position: absolute;
    left: 20px;
  }

  span {
    font-size: 18px;
    font-weight: 700;
  }
`;

export const TabNavigation = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  justify-content: space-between;

  padding: 10px 24px;
  margin-top: 10px;
`;

export const NavigationItem = styled.div<{ isHighlight: boolean }>`
  color: ${({ theme, isHighlight }) => (isHighlight ? theme.black : theme.gray01)};
  font-size: 14px;
  font-style: normal;
  font-weight: ${({ isHighlight }) => (isHighlight ? 700 : 500)};
  line-height: 22px;
  letter-spacing: 0.2px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;

  cursor: pointer;
  transition: color 0.2s ease-in-out;
`;

export const SeperateLine = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0px;
  background-color: ${({ theme }) => theme.gray05};
`;

export const HighLightLine = styled.div<{ position: string }>`
  position: absolute;
  width: 50%;
  height: 2px;
  background-color: ${({ theme }) => theme.main};

  left: ${({ position }) => position === 'follower' && '0px'};
  left: ${({ position }) => position === 'following' && '50%'};

  transition: left 0.2s ease-in-out;
`;

export const InputWrapper = styled.form`
  margin-top: 12px;

  border-radius: 20px;
`;

export const ButtonWrapper = styled.button`
  border: none;
  background-color: inherit;
`;
