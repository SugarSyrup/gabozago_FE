import styled from "styled-components";

export const Container = styled.div`
    padding: 9px 20px;
    border-radius: 20px;
    border: ${({ theme }) => "1px solid" + theme.main};

    display: flex;
    justify-content: space-between;
    position: relative;
`;

export const Input = styled.input`
    border: none;
    width: 80%;

    height: 22px;
    line-height: 22px;
    font-size: 16px;

    &::placeholder {
        color: ${({ theme }) => theme.blue03};
    }

    &:focus {
        outline: none;
    }
`;

export const Btns = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 4px;

    svg.circleX {
        cursor: pointer;
        path: {
            fill: ${({ theme }) => theme.gray04};
        }
    }

    svg.searchIcon {
        cursor: pointer;
        path {
            fill: ${({ theme }) => theme.main};
        }
    }
`;
