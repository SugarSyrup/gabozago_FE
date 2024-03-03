import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Name = styled.span`
    color: #000;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.2px;
`;

export const HighlightName = styled.span`
    color: ${({ theme }) => theme.main};
`;

export const Desc = styled.span`
    color: ${({ theme }) => theme.gray02};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.2px;
`;
