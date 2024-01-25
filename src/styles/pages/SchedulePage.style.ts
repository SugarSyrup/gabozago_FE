import styled from "styled-components";

export const Container = styled.div`
    padding-left:20px;
    padding-right:20px;
    margin-top:40px;
`

//헤더
export const HeadingContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:6px;
`

export const HeadingShadow = styled.span`
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

//내여행 만들기
export const ContainerWithPlan = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    position:relative;
`

export const CreateMyTripContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    border-radius: 6px;
    border: ${({theme}) => `1px dashed ${theme.blue02}`};
    margin-top:25px;

    position:relative;
`

export const CreateMyTripTextWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    
    box-sizing: border-box;
    padding-left:24px;
    padding-top:31px;
    padding-right:41px;
    padding-bottom:26px;
    width:100%;
`
export const CreateMyTripText = styled.span`
    max-width: 144px;
    font-size: 14px;
    font-weight:600;
    line-height: 20px;
    letter-spacing: 0.2px;
    word-break:keep-all;
`

export const TextHighlight = styled.span`
    color:${({theme}) => theme.main};
`

export const SeperateLine = styled.div`
    width:100%;
    border-bottom: ${({theme}) => `.5px solid ${theme.blue02}`};
`

export const ButtonWrapper = styled.div`
    width:100%;
    box-sizing:border-box;

    display:flex;
    justify-content:center;
    align-items:center;

    padding-top:9px;
    padding-bottom:13px;
`

export const ButtonText = styled.span`
    display:flex;
    align-items:center;
    gap:6px;
`

//일정 O 헤더

export const HeadingContainerWithPlan = styled.div`
    width:100%;
    margin-bottom:30px;

    display:flex;
    justify-content: space-between;
    flex-direction:row;
    gap:14px;
`

export const ScheduleAllBtn = styled.span`
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:6px;
    
    font-size: 14px;
    font-weight:400;
    cursor:pointer;
    color: ${({theme}) => theme.gray01};
`

export const ScheduleCardContainer = styled.div`
    display:flex;
    justify-content: space-between;
    flex-direction:row;
    gap:14px;

    width:100%;
    overflow:hidden;
`

export const CreateMyTripScheduleBtn = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;

    margin-top:28px;
    border-radius:10px;
    background-color:${({theme}) => theme.gray05};

    padding:24px 100px;
    font-size: 14px;
    font-weight:600;
    color:${({theme}) => theme.gray02};
`

//Content 
export const ContentHeadingWrappper = styled.div`
    margin-top:26px;
    margin-bottom:18px;
`

export const ContentContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:16px;
`

export const FloatingBtnWrapper = styled.div`
    position: absolute;
    right: 45px;
    bottom: 130px;
    cursor: pointer;
`;
