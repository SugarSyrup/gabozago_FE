import styled from 'styled-components';

export const NoDataContainer = styled.div`
  width: 100%;
  height: calc(100dvh - 120px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.font.tertiary};

  img {
    mix-blend-mode: luminosity;
    width: 158px;
    height: 148px;
  }
`;

export const AlertInfomation = styled.div`
  width: 100%;
  padding: 16px 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.font.tertiary};
`;
