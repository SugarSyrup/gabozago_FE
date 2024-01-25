import styled from "styled-components";

export const Card = styled.div`
    width: 260px;
    height: 141px;
    flex-shrink: 0;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.blue05};

    position: relative;
`;

export const InfoContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;

    padding-left: 20px;
    padding-bottom: 16px;
    padding-top: 20px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;

    border-bottom: ${({ theme }) => `.4px solid ${theme.blue04}`};
`;

export const ThumbnailWrapper = styled.div`
    width: 57px;
    height: 57px;
    flex-shrink: 0;
    background-color: ${({ theme }) => theme.gray03};
    border-radius: 100%;
`;

export const Date = styled.span`
    color: ${({ theme }) => theme.gray01};
    font-size: 10px;
    font-weight: 600;
    line-height: 13.468px;
`;

export const MenuIcon = styled.div`
    position: absolute;
    right: 12px;
    top: 8px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-left: 15px;
    padding-right: 10px;
`;

export const Places = styled.div`
    display: flex;
    justify-content: space-between;
    flex-shrink: 0;
    gap: 3px;
`;

export const Place = styled.span`
    color: ${({ theme }) => theme.gray01};
    font-size: 12px;
    line-height: 13.468px;
`;
