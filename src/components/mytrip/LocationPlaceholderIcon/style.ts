import styled from 'styled-components';

export const IconWrapper = styled.div<{ type: 1 | 2 | 3 | 4 | 5 }>`
  width: 40px;
  height: 40px;
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ type }) => {
    switch (type) {
      case 1:
        return '#F4F4FF';
      case 2:
        return '#FFF5EE';
      case 3:
        return '#FFFACD';
      case 4:
        return '#D4FFE4';
      case 5:
        return '#D9D7D7';
    }
  }};
`;
