import styled from 'styled-components';

export const Slider = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 16px;
  column-gap: 20px;

  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SliderImg = styled.img`
  width: 100%;
  border-radius: 8px;

  object-fit: cover;
`;

export const SliderItem = styled.div`
  width: 100%;
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

export const SliderItemIdx = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 32px;
  height: 32px;
  padding: 4px;

  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.blue.primary};
  color: white;
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
