import styled from 'styled-components';

export const PinContainer = styled.div<{ color: string }>`
  position: relative;

  line-height: 0;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: ${({ theme }) => theme.white};
    text-align: center;
    font-size: 8px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  svg {
    width: 18px;
    height: 20px;
    filter: drop-shadow(0px 5px 5px #00000050); /*그림자*/

    path {
      fill: ${({ color, theme }) => color || theme.main};
    }
  }

  &:hover {
  }
`;

export const InfoTopContainer = styled.div`
  padding-top: 1px;
  padding-left: 4px;
  & > p:first-child {
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
    align-items: center;
  }
  & > p:nth-child(2) {
    padding-bottom: 2px;
  }
`;
