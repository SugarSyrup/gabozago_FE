import styled from "styled-components";

export const List = styled.ol`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, auto));
  gap: 11px 9px;
`;

export const ListItem = styled.li``;

export const Container = styled.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  line-height: 0;
`;

export const MenuButton = styled.button`
  margin: 10px 5px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0;

  border: 0;
  background-color: transparent;
  text-shadow: 0 0 5px #00000060;
  cursor: pointer;

  svg path {
    fill: ${({ theme }) => theme.white};
    stroke: ${({ theme }) => theme.white};
  }
`;

export const InfoBox = styled.div`
  padding: 12px 10px;
  position: absolute;
  left: 0;
  bottom: 0;

  text-decoration: none;
  text-shadow: 0 0 5px #00000040;
  font-weight: 400;
  line-height: 22px;
  color: ${({ theme }) => theme.white};

  p:nth-child(2) {
    margin-top: 3px;

    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  object-fit: cover;
`;
