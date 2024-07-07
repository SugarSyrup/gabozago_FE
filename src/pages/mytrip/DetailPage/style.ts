import styled from 'styled-components';

export const Header = styled.header`
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: ${({ theme }) => theme.white};
`;

export const NavigationHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 28px;
    height: 28px;

    path {
      fill: ${({ theme }) => theme.colors.black.primary};
    }
  }

  svg:last-child {
    path {
      stroke: ${({ theme }) => theme.colors.black.primary};
    }
  }
`;

export const DateParagraph = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const MessageBox = styled.div`
  margin-bottom: 20px;
  padding: 16px 20px;
  width: 100%;
  font-size: 13px;
  line-height: 20px;
  color: ${({ theme }) => theme.main};
  background-color: ${({ theme }) => theme.blue05};
  border-radius: 10px;

  p {
    display: flex;
    align-items: end;
    svg {
      margin-left: 5px;
      width: 18px;
    }
  }
`;
