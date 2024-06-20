import styled from 'styled-components'

export const PlacePhotos = styled.div`
  width: 100%;
  height: 520px;
  padding-bottom: 40px;

  margin-top: 20px;

  display: flex;

  position: relative;
  overflow-x: scroll;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    height: 4px;
    background-color: inherit;
  }

  &::-webkit-scrollbar-thumb {
    width: 52px;
    height: 4px;
    background-color: black;
  }
`

export const PhotoItem = styled.img`
  flex-shrink: 0;

  width: 100%;
  height: 480px;
`
