import styled from "styled-components";

export const Header = styled.div`
    width:100%;
    padding-top:40px;

    position:absolute;
    top:0px;
    left:0px;

    display:flex;
    flex-direction:column;

    background-color:white;
`;

export const SearchBar = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    width: 100%;
    position: relative;

    padding-left:20px;
    padding-right:20px;
`

export const TabNavigation = styled.div`
    width: 100%;
    position: relative;
    //left: 0px;

    border-bottom: ${({ theme }) => `2px solid ${theme.gray04}`};

    display: flex;
    justify-content: space-between;

    padding: 10px 24px;
    margin-top: 10px;
`;

export const NavigationItem = styled.div<{ isHighlight: boolean }>`
    color: ${({ theme, isHighlight }) =>
        isHighlight ? theme.black : theme.gray01};
    font-size: 14px;
    font-style: normal;
    font-weight: ${({ isHighlight }) => (isHighlight ? 700 : 500)};
    line-height: 22px;
    letter-spacing: 0.2px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;

    cursor: pointer;
    transition: color 0.2s ease-in-out;
`;

export const HighlightLine = styled.div<{ isHighlight: boolean }>`
    width: 50%;
    border-bottom: ${({ theme }) => `2px solid ${theme.main}`};

    position: absolute;
    left: ${({ isHighlight }) => (isHighlight ? "0px" : "50%")};
    bottom: -2px;

    transition: left 0.2s ease-in-out;
`;

export const Contents = styled.div`
    padding-top: 120px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const RecommendationList = styled.div`
    width: 100%;
    margin-top: 24px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const RecommendatoinReviewList = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    width: 100%;
    gap: 10px;
`;

export const Footer = styled.footer`
    position: relative;
    /* left:0px;
    bottom: 0px; */

    width: 100%;
    padding-top:18px;
    padding-bottom: 38px;
    padding-left: 30px;
    padding-right: 30px;

    background-color:${({theme}) => theme.gray07};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;
