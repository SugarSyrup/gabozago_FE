import styled from 'styled-components';

export const List = styled.ol`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(auto-fit, minmax(150px, auto));
  gap: 11px 9px;
`;

export const ListItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.gray04};
`;

export const Container = styled.div`
  padding: 10px 0 14px;
  width: 100%;
  overflow-x: hidden;
`;

export const MenuButton = styled.button`
  margin: 10px 5px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0;
  width: 24px;
  height: 24px;

  border: 0;
  background-color: transparent;
  text-shadow: 0 0 5px #00000060;
  cursor: pointer;
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const TopInfoBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  p {
    text-decoration: none;
    color: ${({ theme }) => theme.black};
    font-weight: 500;
    font-size: 14px;
  }
  p:nth-child(2) {
    margin-top: 2px;
    color: ${({ theme }) => theme.gray02};
    font-weight: 400;
    font-size: 12px;
  }
`;

export const ProfileImage = styled.img`
  margin-right: 13px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ContentsBox = styled.div`
  cursor: pointer;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  word-break: keep-all;

  p {
    padding: 10px 3px 15px;
  }
`;

export const ImageList = styled.ol`
  cursor: default;
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: y mandatory;
  display: flex;
  gap: 6px;
`;
export const ImageItem = styled.li`
  scroll-snap-align: start;
`;
export const Image = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
`;

export const BottomInfoBox = styled.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  gap: 9px;
`;

export const InfoItem = styled.span`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.gray};

  svg {
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }
`;
