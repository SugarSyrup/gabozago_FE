import styled from "styled-components"

export const ContentsContainer = styled.div`
  width:100%;

  padding-top:20px;
  padding-bottom:20px;
`

export const Slider = styled.div`
  width:100%;
  display:flex;
  justify-content:flex-start;
  gap:10px;

  padding-top:15px;

  overflow-x:scroll;
  &::-webkit-scrollbar{
    display:none;
  }
`

export const TopSliderItem = styled.div`
  width:220px;
  position:relative;

  flex-shrink:0;
  display:flex;
  flex-direction:column;
  gap:5px;

  svg{
    width:30px;
    height:30px;

    path{
      fill:white;
    }
  }
`

export const SliderImg = styled.img`
  width:100%;
  height: 166px;
  border-radius:8px;

  object-fit:cover;
`

export const SliderItem = styled.div`
  width:166px;
  position:relative;

  flex-shrink:0;
  display:flex;
  flex-direction:column;
  gap:5px;


  svg{
    width:30px;
    height:30px;

    path{
      fill:white;
    }
  }
`

export const BookMarkWrapper = styled.div<{isBookmark:boolean}>`
    position:absolute;
    right:10px;
    bottom:50px;
    z-index:20;

    svg{
      path{
        fill:${({theme, isBookmark}) => isBookmark && theme.main };
      }
    }
`

export const ShortFormListContainer = styled.div`
    width:100%;
    padding-top:20px;
`

export const ContentSpace = styled.div`
  position:absolute;
  margin-left:-20px;

  width:100%;
  height:14px;

  background-color:${({theme}) => theme.gray06};
`