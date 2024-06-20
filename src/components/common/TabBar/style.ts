import styled from 'styled-components';

export const Container = styled.div<{ widthStyle: 'fit-content' | 'flexible' }>`
  position: relative;
  width: ${({ widthStyle }) => (widthStyle === 'flexible' ? 'auto' : widthStyle)};
`;

export const TabList = styled.ol<{ widthStyle: 'fit-content' | 'flexible' }>`
  display: flex;
  justify-content: space-around;
  gap: ${({ widthStyle }) => (widthStyle === 'flexible' ? '0' : '13px')};
  border-bottom: 2px solid ${({ theme }) => theme.gray04};
`;

export const TabItem = styled.li<{
  widthStyle: 'fit-content' | 'flexible';
  focused: boolean;
  fontSize: string | '14px';
  color: string | 'default';
}>`
  padding: 10px 0;
  flex-grow: ${({ widthStyle }) => (widthStyle === 'flexible' ? 1 : 0)};
  flex-basis: ${({ widthStyle }) => (widthStyle === 'flexible' ? 'auto' : 'fit-content')};
  cursor: pointer;
  text-align: center;
  font-size: ${({ fontSize }) => fontSize};
  line-height: 22px;
  font-weight: ${({ focused }) => (focused === true ? '600' : '500')};
  color: ${({ theme, focused, color }) => {
    if (focused) {
      return theme.main;
    }
    return color === 'default' ? theme.gray01 : color;
  }};

  transition: all 0.3s ease-in-out;
`;

export const HighlightLine = styled.div<{
  tabsLength: number;
  focus: number;
  width: number;
  x: number;
}>`
  position: absolute;
  bottom: 0;
  left: ${({ x }) => x}px;
  width: ${({ width }) => width}px;
  height: 2px;

  background-color: ${({ theme }) => theme.main};
  transition: all 0.2s ease-in-out;
`;
