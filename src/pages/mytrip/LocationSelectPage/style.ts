import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    width: 100%;
    position: relative;
`;

export const LocationsHeader = styled.div`
    margin-top: 26px;
    margin-bottom: 20px;
`;

export const Locations = styled.div`
    width:100%;
    position:relative;

    display:flex;
    flex-direction:column;
    gap:20px;
`;

export const Footer = styled.footer`
    position: absolute;
    bottom: 50px;
    left: 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;

    padding-left: 25px;
    padding-right: 25px;

    width: 100%;
    overflow: auto;
`;

export const LocationTags = styled.div`
    width: 100%;
    overflow: hidden;

    display: flex;
    gap: 10px;
`;

export const SubmitButtonText = styled.span`
    color: white;
`;

export const LocationItem = styled.li`
    width:100%;

    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const LocationInfomation = styled.div`
    display:flex;
    align-items:center;
    gap:15px;
`

export const LocationImgWrapper = styled.div`
    width:40px;
    height:40px;
    border-radius:100%;
    background-color:${({theme}) => theme.blue04};

    display:flex;
    justify-content:center;
    align-items:center;

    svg{
        width:24px;
        height:24px;
    }
`

export const LocationSelectButton = styled.button<{isActive: boolean}>`
    padding:4px 15px;

    border:none;
    border-radius:20px;
    background-color:${({theme, isActive}) => isActive ? theme.main : theme.gray06 };
    color:${({theme, isActive}) => isActive ? theme.white : theme.black };
    
    cursor:pointer;
`

export const Button = styled.button<{
    bgColor: boolean
}>`
    width:100%;
    padding:12px 20px;
    border-radius:30px;
    border:none;

    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;

    background-color: ${({theme, bgColor}) => bgColor ? theme.main : '#a6a6a6'};
    text-decoration: none;
    cursor:pointer;
    svg{
        width:28px;
        height:28px;

        path{
            fill:white;
        }
    }
`


export const ChangePopupContainer = styled.form`
    display:flex;
    flex-direction:column;
    gap:14px;
`

export const ChangePopupHeader = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const ChangePopupInput = styled.input`
    width:100%;
    height:28px;
    color: ${({theme}) => theme.gray};
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    border:none;
    border-bottom:1px solid #e4e4e4;
`