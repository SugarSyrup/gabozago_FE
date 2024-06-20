import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;
  padding: 6px 4px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  svg {
    width: 40px;
    height: 40px;

    path {
      fill: ${({ theme }) => theme.gray03};
    }
  }
`;

export const Avatar = styled.img`
  border-radius: 100%;
`;

export const Name = styled.span`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.2px;
`;

export const DeleteBtn = styled.button`
  border: none;

  display: inline-flex;
  padding: 5px 11px;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  background: ${({ theme }) => theme.gray05};

  font-size: 11px;
  line-height: 20px;
  color: ${({ theme }) => theme.gray01};
`;
