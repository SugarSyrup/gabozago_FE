import styled from 'styled-components'

export const List = styled.ol`
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  gap: 20px 20px;
`

export const ListItem = styled.li``

export const Container = styled.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  line-height: 0;
`

export const Views = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
`

export const InfoBox = styled.div`
  padding: 10px 10px;
  position: absolute;
  left: 0;
  bottom: 0;

  text-decoration: none;
  font-weight: 400;
  line-height: 22px;
  color: ${({ theme }) => theme.white};

  p:nth-child(1) {
    svg {
      path {
        fill: ${({ theme }) => theme.white};
      }
    }

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
  }

  p:nth-child(2) {
    margin-top: 5px;

    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  object-fit: cover;
`
