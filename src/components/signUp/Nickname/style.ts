import styled, {css} from "styled-components"

export const InputExplain = styled.span`
    display:inline-flex;
    justify-content:flex-start;
    align-items:center;
    gap:5px;

    img{
        width:16px;
        height:16px;

        border-radius:100%;
    }

    color: ${({theme}) => theme.gray02};
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.2px;
`

export const AlertMessage = styled.span<{color: "red" | "blue"}>`
    color: ${({color, theme}) => color === "blue" ? theme.main : theme.red};
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.2px;
`


export const BrandIcon = styled.div<{
    type: "kakao" | "google" | "naver" | "apple"
}>`
    width:16px;
    height:16px;
    border-radius:100%;

    display:flex;
    justify-content:center;
    align-items:center;

    svg{
        width:16px;
        height:16px;
        path{
            width:16px;
            height:16px;
        }
    }

    ${({type}) => type === "naver" && `svg{width:8px; height:8px;}`}

    ${({type}) => {
        switch(type) {
            case "kakao":
                return css`
                    background-color: yellow;
                `
            case "google":
                return css`
                    background-color:#FFFFFF;
                `
            case "naver":
                return css`
                    background-color:#00BF18;
                `
            case "apple":
                return css`
                    background-color:#000000;
                `
        }
    }}
`