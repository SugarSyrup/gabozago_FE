import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'left center right';
`;

export const LeftIconContainer = styled.div`
  grid-area: left;

  display: flex;
  justify-content: center;
`;

export const HeaderText = styled.div`
  grid-area: center;

  display: flex;
  justify-content: center;
  color: black;
`;
