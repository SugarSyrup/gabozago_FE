import styled from "styled-components";

export const Container = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    font-size: 13px;
    font-weight: 400;
    color: ${({ theme }) => theme.gray01};
`;

export const Name = styled.span`
    max-width: 44px;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const Thumbnail = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.gray04};
`;

export const DeleteIcon = styled.div`
    position: absolute;
    right: -8px;
    top: -8px;
`;
