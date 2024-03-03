import styled from "styled-components";

export const Container = styled.button<{isFollowing: boolean}>`
    padding:7px 15px 7px 10px;

    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:6px;

    font-size: 13px;


    color: ${({theme, isFollowing}) => isFollowing ? "white" :  theme.main };
    background-color:${({theme, isFollowing}) => isFollowing? theme.main : "white"};
    border: ${({theme, isFollowing}) => isFollowing && `1px solid ${theme.main}`};
    border-radius:6px;
`