import styled from "styled-components";

export const PlaceList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PlaceItem = styled.li`
  width: calc(100% + 20px);
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
`;

export const BookMarkButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: transparent;
  border: 0;

  svg {
    fill: ${({ theme }) => theme.main};
  }
`;

export const PlaceInfoBox = styled.div`
  flex: 1 1 auto;
  max-width: 100%;
`;

export const TopInfoBox = styled.div`
  width: 100%;
  margin-bottom: 7px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PlaceNameSpan = styled.span`
  word-break: normal;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.2%;
  line-height: 18px;
`;

export const PlaceThemeSpan = styled.span`
  font-size: 12px;
  word-break: keep-all;
  color: ${({ theme }) => theme.gray};
`;

export const AddressParagraph = styled.p`
  width: 100%;
  margin-bottom: 12px;
  font-size: 12px;
  word-break: keep-all;
  color: ${({ theme }) => theme.gray};
`;

export const ImageList = styled.ol`
  width: 100%;
  overflow-x: auto;
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
`;

export const Image = styled.img`
  width: 82px;
  height: 82px;
  border-radius: 6px;
  object-fit: cover;
`;

export const ImagePlaceHolder = styled(Image)`
  object-fit: none;
`;
