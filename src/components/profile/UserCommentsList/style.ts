import styled from 'styled-components';

export const List = styled.ol`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const Item = styled.li`
  width: 100%;

  display: flex;
  flex-direction: row;
  gap: 10px;

  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.gray04};

  svg {
    flex-shrink: 0;
    width: 24px;
    height: 24px;

    path {
      fill: #d4ddff;
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
