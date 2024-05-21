import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  overflow-y: auto;
`;

export const OrderedList = styled.ol`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  padding: 14px 18px;
  border-bottom: 1px solid ${({ theme }) => theme.gray04};

  a {
    text-decoration: none;
    line-height: 22px;
    font-weight: 400;
    color: ${({ theme }) => theme.black};

    &:hover {
      text-decoration: underline;
    }
  }

  p.title {
    font-size: 14px;
  }
  p.date {
    font-size: 12px;
    color: ${({ theme }) => theme.gray01};
  }
`;
