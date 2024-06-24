import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
  position: absolute;
  right: 0;
  padding: 0;
`;

export const EditButton = styled.button<{ color?: string }>`
  border: 0;
  border-radius: 5px;
  background-color: transparent;
  font-size: 13px;
  line-height: 22px;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  color: ${({ color, theme }) => color || theme.main};

  &:hover {
    background-color: ${({ theme }) => theme.blue05};
  }
  &:active {
    background-color: ${({ theme }) => theme.blue04};
  }
`;
