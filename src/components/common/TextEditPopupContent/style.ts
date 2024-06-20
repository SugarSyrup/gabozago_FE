import styled from 'styled-components';

export const Header = styled.div`
  margin-bottom: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 12px;
  line-height: 22px;
  font-weight: 500;
`;

export const SaveButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: 0;
  font-size: 12px;
  background-color: transparent;
  color: ${({ theme }) => theme.main};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.gray05};
  }
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 5px 3px;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.gray04};

  font-size: 16px;
`;
