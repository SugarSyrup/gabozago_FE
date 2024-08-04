import styled from 'styled-components';

export const Slider = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 10px;

  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SliderImg = styled.img`
  width: 100%;
  height: 166px;
  border-radius: 8px;

  object-fit: cover;
`;

export const SliderItem = styled.div`
  width: 166px;
  position: relative;

  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;

  svg {
    width: 30px;
    height: 30px;

    path {
      fill: white;
    }
  }
`;

export const BookMarkWrapper = styled.div<{ isBookmark: boolean }>`
  position: absolute;
  right: 10px;
  bottom: 50px;
  z-index: 20;

  svg {
    path {
      fill: ${({ theme, isBookmark }) => isBookmark && theme.main};
    }
  }
`;
