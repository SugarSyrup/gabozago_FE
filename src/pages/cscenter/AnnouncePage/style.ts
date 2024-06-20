import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% + 40px);
  margin-left: -20px;
`;

export const OrderedList = styled.ol`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const ListItem = styled.li`
  padding: 15px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.gray04};

  a {
    color: ${({ theme }) => theme.black};
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p.date {
    color: #a6a6a6;
  }
`;
