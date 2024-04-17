import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const BackButtonWrapper = styled.div`
    position:absolute;
    top:16px;
    left:20px;
`

export const ThumbnailWrapper = styled.div`
    position:absolute;
    left:0;
    top:0;
    width:100%;

    img{
        width:100%;
        max-height:100%;
        object-fit: contain;
    }
`

export const Header = styled.div<{paddingTop?:number}>`
    width:100%;
    margin-top:9px;
    padding-top:${({paddingTop}) => `${paddingTop}px`};

    display:flex;
    flex-direction:column;
`

export const Type = styled.span`
    color:${({theme}) => theme.gray02};
    font-size: 12px;
    font-weight: 400;
`

export const Title = styled.span`
    color: ${({theme}) => theme.black};
    font-size: 21px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: -0.42px;
`

export const StationContainer = styled.div`
    margin-top:36px;

    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:7px;
`

export const StationTitle = styled.span`
    color: ${({theme}) => theme.gray};
    font-size: 14px;
    font-weight: 600;
    line-height: 28px;
`

export const NextArticle = styled.div`
    width:100%;
    padding-left:26px;
    padding-right:26px;
    background-color:${({theme}) => theme.blue05};
    border-radius:6px;

    span{
        color: ${({theme}) => theme.gray};
        font-size: 12px;
        font-weight: 500;
        line-height: 33px;
    }
`

export const Content = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;

    strong {
        font-weight:600;
    }

    img {
        width:100%;
        object-fit:contain;
    }
    div.stationTitleContainer {
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        gap:10px;

        margin-top:100px;

        div.index {
            display:flex;
            justify-content:flex-start;
            align-items:center;
            gap:6px;

            span{
                color: ${({theme}) => theme.black};
                font-size: 16px;
                font-weight: 600;
                letter-spacing: -0.32px;
            }
        }

        span.name {
            color: ${({theme}) => theme.black};
            font-size: 20px;
            font-weight: 600;
        }
    }


    span.type {
        margin-top:55px;
        padding-left:8px;
        padding-right:8px;

        color: ${({theme}) => theme.main};
        font-size: 15px;
        font-weight: 400;
        letter-spacing: -0.3px;
    }

    span.semiTitle {
        color: #000;
        font-size: 18px;
        font-weight: 600;
        line-height: 33px;
        letter-spacing: -0.36px;

        margin-top:55px;
        margin-bottom:10px;
        padding-left:8px;
        padding-right:8px;
    }

    span.text {
        color: #000;
        font-size: 18px;
        font-weight: 400;
        line-height: 35px;
        letter-spacing: -0.36px;

        padding-left:8px;
        padding-right:8px;
    }

    div.profile {
        margin-top:30px;
        padding-left:8px;
        padding-right:8px;

        display:flex;
        flex-direction:column;
        align-items:center;

        div.info {
            width:100%;
            padding: 11px 18px 12px;

            border-radius:2px;
            background-color:${({theme}) => theme.blue05};

            display:flex;
            flex-direction:column;
            align-items:flex-start;

            span.user {
                display:inline-flex;
                justify-content:flex-start;
                align-items:flex-end;
                gap:5px;

                color: ${({theme}) => theme.main};
                font-size: 16px;
                font-weight: 700;
                line-height: 22px;

                span.role {
                    color: ${({theme}) => theme.blue02};
                    font-size: 11px;
                    font-weight: 600;
                    line-height:16px;
                }
            }

            span.description {
                color: ${({theme}) => theme.gray01};
                font-size: 11px;
                font-weight: 400;
                line-height: 22px;
            }
        }
    }

    div.photo {
        margin-top:30px;

        display:flex;
        flex-direction:column;
        align-items:flex-end;


        span {
            color: ${({theme}) => theme.gray01};
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height:24px;
        }
    }

    div.place {
        margin-top:30px;

        display:flex;
        flex-direction:column;

        div.info {
            display:flex;
            flex-direction:row;
            justify-content:space-between;

            padding:11px 14px;
            border-radius: 5px;
            border: 1px solid ${({theme}) => theme.blue02};
            background: ${({theme}) => theme.blue05};

            div.text {
                display:flex;
                flex-direction:column;
                gap:5px;
                
                padding-left:8px;
                padding-right:8px;

                div.name {
                    display:flex;
                    gap:8px;
                    align-items:center;

                    color: ${({theme}) => theme.black};
                    font-size: 17px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 18px;
                }
            }

            span.address {
                margin-left:28px; 

                color: #444;
                font-size: 10px;
                font-weight: 400;
                line-height: 17px;
            }

            div.buttons {
                display:flex;
                gap:22px;

                div.icon {
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    gap:2px;

                    cursor:pointer;

                    span{
                        color: ${({theme}) => theme.gray01};
                        text-align: center;
                        font-size: 8px;
                    }
                }
            }
        }
    }

    span.result {
        color: ${({theme}) => theme.main};
        font-size: 18px;
        font-weight: 400;
        line-height: 35px;
        letter-spacing: -0.36px;

        margin-top:100px;
        margin-left:-6px;
    }
`

export const NextArticleLink = styled(Link)`
    color: ${({theme}) => theme.main};
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    text-decoration-line: underline;

    padding-bottom:174px;
`