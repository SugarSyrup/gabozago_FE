import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100dvh - 100px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImg = styled.div`
  width: 250px;
  height: 250px;
  background-image: url('/imgs/ErrorHandling.png');

  position: relative;
`;

export const MessageBox = styled.div`
  position: absolute;
  right: 7px;
  bottom: 70px;

  svg {
    width: 50px;
    height: 32px;
  }
`;

export const Heading = styled.h2`
  margin-top: 24px;

  color: ${({ theme }) => theme.colors.font.priamry};
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  text-align: center;
`;

export const Description = styled.span`
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.font.tertiary};
  text-align: center;

  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

export const Footer = styled.footer`
  width: 100%;
  padding: 8px 28px;
`;
