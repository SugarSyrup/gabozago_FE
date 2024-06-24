import styled from 'styled-components';

export const MapWrapper = styled.div<{ height: string }>`
  height: 220px;
  height: ${({ height }) => height};
  transition: all ease-in-out 0.3s;
`;
