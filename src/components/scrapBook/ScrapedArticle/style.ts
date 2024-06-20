import styled from 'styled-components';

export const ArticleContainer = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: 1fr fit-content(100%);
  gap: 10px;

  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.gray04};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BottomInfoContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: nowrap;
  gap: 3px;
  align-items: center;

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-right: 5px;
      width: 16px;
      height: 16px;
    }

    &:not(:first-child) {
      svg path {
        fill: ${({ theme }) => theme.gray02};
      }
    }
  }
`;

export const ThumbnailImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 6px;

  object-fit: cover;
`;

export const ThumbnailImagePlaceHolder = styled(ThumbnailImage)`
  background-color: ${({ theme }) => theme.gray05};
  object-fit: none;
`;
