import styled from 'styled-components';

export const Container = styled.div`
  @keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(30%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    animation: fadein 2s;
  }
`;

export const TitleParagraph = styled.p`
  margin-bottom: 17px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  color: ${({ theme }) => theme.black};
  animation: fadein 2s;
`;

export const DescParagraph = styled.p`
  margin-top: 6px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  word-break: keep-all;
  color: ${({ theme }) => theme.gray01};
  animation: fadein 2s;
`;
