import styled from "styled-components"

export const SliderContainer = styled.div`
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

    position:absolute;
    right:10px;
    top:126px;

    path{
      fill:white;
    }
  }
`

export const SliderImg = styled.img`
  width:100%;
  height: 166px;
  background-color:#E4E4E4;
  border-radius:8px;

  object-fit:contain;
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

    position:absolute;
    right:10px;
    top:126px;

    path{
      fill:white;
    }
  }
`

export const ShortFormListContainer = styled.div`
    width:100%;
    padding-top:20px;
`