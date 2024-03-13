import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  transform: translate(0);
  transition: transform ease-in-out 0.3s;
  height: 100%;
`;

export const YoutubeContainer = styled.div`
  width: 100%;
  height: inherit;
`;

export const YoutubeIframe = styled.iframe`
  width: 100%;
  height: inherit;
`;
