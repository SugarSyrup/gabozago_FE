import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 0 20px;
`;

export const ValueParagraph = styled.p`
  margin: 10px 0 30px;
  font-weight: 500;
  line-height: 22px;
  font-size: 16px;
`;

export const TrackContainer = styled.div<{
  min: number;
  max: number;
  value: [number, number];
}>`
  position: relative;
  &::before {
    position: absolute;
    top: 0;
    content: '';
    display: block;
    border-radius: 10px;
    width: 100%;
    margin: 6px 0;
    height: 8px;
    background-color: ${({ theme }) => theme.blue05};
  }
  &::after {
    position: absolute;
    top: 0;
    margin: 6px 0;
    left: ${({ max, value }) => 100 / (max / value[0])}%;
    width: ${({ min, max, value }) => ((value[1] - value[0]) / (max - min)) * 100}%;
    content: '';
    display: block;
    border-radius: 10px;
    height: 8px;
    background-color: ${({ theme }) => theme.blue04};
  }
`;

export const InputContainer = styled.div`
  position: relative;

  .range-slider {
    background-color: ${({ theme }) => theme.blue05};
  }
  .range-slider__thumb {
    background-color: ${({ theme }) => theme.main};
    outline: 2px solid transparent;
    transition: background-color ease-in-out 0.3s;
    &:active {
      background-color: ${({ theme }) => theme.blue02};
      outline: 2px solid ${({ theme }) => theme.blue03};
    }
  }
  .range-slider__range {
    background-color: ${({ theme }) => theme.blue04};
  }
`;

export const SliderLabel = styled.span<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 25px;

  ${({ position }) =>
    position === 'left'
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `};

  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.gray01};
`;

export const ExtraControlerContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
`;
