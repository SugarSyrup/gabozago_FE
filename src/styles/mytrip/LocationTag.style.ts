import styled from "styled-components";

export const Container = styled.div`
    padding: 6px 13px;
    color: ${({ theme }) => theme.main};
    background-color: ${({ theme }) => theme.blue05};

    border: ${({ theme }) => `1px solid ${theme.main}`};
    border-radius: 20px;

    display: flex;
    gap: 12px;

    svg {
        cursor: pointer;
    }
`;
