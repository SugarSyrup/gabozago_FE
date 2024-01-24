import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 10px;
`;

export const Thumbnail = styled.img``;

export const BookMarkWrapper = styled.div`
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
`;

export const ImgWrapper = styled.div`
    width: 174px;
    height: 174px;
    flex-shrink: 0;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.gray04};

    position: relative;
`;

export const Content = styled.span`
    font-size: 11px;
    font-weight: 400;
    line-height: 9px;
    letter-spacing: 0.2px;
`;
