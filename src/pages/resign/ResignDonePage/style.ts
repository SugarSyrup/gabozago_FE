import styled from "styled-components";

export const NavContainer = styled.div`
  padding: 20px;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleParagraph = styled.p`
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
`;
