import styled from 'styled-components';

export const Container = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.gray01};

  padding-top: 8px;
  padding-right: 8px;
`;

export const Name = styled.span`
  max-width: 44px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Thumbnail = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.gray04};
`;

export const DeleteIcon = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
`;
