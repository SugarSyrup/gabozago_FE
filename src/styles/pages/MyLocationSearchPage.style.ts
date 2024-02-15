import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    width: 100%;
    position: relative;
`;

export const TabNavigation = styled.div`
    width: 100%;
    position: absolute;
    left: 0px;

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
    transition: color 0.2s linear;
`;

export const HighlightLine = styled.div<{ isHighlight: boolean }>`
    width: 50%;
    border-bottom: ${({ theme }) => `2px solid ${theme.main}`};

    position: absolute;
    left: ${({ isHighlight }) => (isHighlight ? "0px" : "50%")};
    bottom: -2px;

    transition: left 0.2s linear;
`;

export const Contents = styled.div`
    margin-top: 54px;
    padding-top: 20px;

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
    position: absolute;
    bottom: 0px;

    width: 100%;
    padding-bottom: 38px;
    padding-left: 30px;
    padding-right: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
`;
