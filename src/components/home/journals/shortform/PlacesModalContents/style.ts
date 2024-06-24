import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 30px;
`;

export const PlaceList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-height: 40dvh;
  overflow-y: auto;
`;

export const PlaceItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
`;

export const LeftBox = styled.div`
  display: flex;
  gap: 10px;
  flex: 1 1;

  cursor: pointer;
`;

export const TextInfoBox = styled.div`
  flex: 1 1;

  p {
    display: flex;
    align-items: center;
    gap: 3px;
    width: 100%;

    svg {
      width: 16px;
      height: 16px;

      path {
        fill: ${({ theme }) => theme.gray02};
      }
    }
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 5px;
`;

export const IconButton = styled.button<{
  type: 'addToPlan' | 'bookmark';
  isActive?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;
  padding: 5px;
  background-color: transparent;
  border-radius: 50%;

  svg {
    width: 28px;
    height: 28px;

    path {
      fill: ${({ type, theme }) => type === 'addToPlan' && theme.gray02};
      fill: ${({ isActive, theme }) => (isActive ? theme.main : theme.gray02)};
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.gray05};
  }
`;
