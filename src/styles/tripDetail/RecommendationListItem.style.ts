import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const LeftItems = styled.div`
    display: flex;
    gap: 17px;
`;

export const Thumbnail = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 100%;

    background-color: ${({ theme }) => theme.gray04};
`;

export const Infomation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;

    font-size: 11px;
    font-weight: 400;

    svg {
        width: 14px;
        height: 14px;
    }
`;

export const Name = styled.span`
    font-weight: 600;
    line-height: 22px;
    font-size: 14px;

    display: inline-block;
    max-width: 210px;
    text-overflow: ellipsis;
`;

export const Desc = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 7px;
`;
