import styled from 'styled-components';

interface Props {
  type: 'normal' | 'text';
  size: 'lg' | 'md' | 'sm' | 'xs';
  active?: boolean;
  width?: string;
}

export const Button = styled.button<Props>`
  background-color: ${({ type }) => type == 'text' && 'inherit'};
  background-color: ${({ type, theme }) => type == 'normal' && theme.gray06};
  background-color: ${({ active, theme }) => active && theme.main};

  padding: ${({ size }) => size == 'lg' && '17px 103px'};
  padding: ${({ size }) => size == 'md' && '9px 69px'};
  padding: ${({ size }) => size == 'sm' && '4px 16px'};
  padding: ${({ size }) => size == 'xs' && '2px 12px'};
  cursor: pointer;
  border: none;
  border-radius: 30px;
  box-sizing: content-box;

  font-size: ${({ size }) => size == 'lg' && '16px'};
  font-size: ${({ size }) => size == 'md' && '16px'};
  font-size: ${({ size }) => size == 'sm' && '10px'};
  font-size: ${({ size }) => size == 'xs' && '11px'};
  font-style: normal;
  font-weight: ${({ size }) => size == 'lg' && 400};
  font-weight: ${({ size }) => size == 'md' && 400};
  font-weight: ${({ size }) => size == 'sm' && 500};
  font-weight: ${({ size }) => size == 'xs' && 500};

  color: ${({ type, theme }) => type == 'text' && theme.gray01};
  color: ${({ type, theme }) => type == 'normal' && theme.black};
  color: ${({ active, theme }) => active && theme.white};

  box-sizing: border-box;
  width: ${({ width }) => width && `${width}`};

  &:disabled {
    background-color: ${({ theme }) => theme.gray03};
    color: ${({ theme }) => theme.white};
  }
`;
