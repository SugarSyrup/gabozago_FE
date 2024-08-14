import styled, { css } from 'styled-components';
import xSvg from '../../../assets/icons/circleX.svg';

export const ButtonContainer = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 500px;

  position: fixed;
  bottom: 0px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
`;

export const TitleHeading = styled.h2`
  color: ${({ theme }) => theme.black};

  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.15px;
`;

export const DescSpan = styled.span`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;

  img {
    width: 16px;
    height: 16px;

    border-radius: 100%;
  }

  word-break: keep-all;
  color: ${({ theme }) => theme.gray02};
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.2px;
`;

export const SelectButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 9px 15px;

  cursor: pointer;
  text-align: start;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.gray04};

  svg {
    width: 20px;
    height: 20px;
    padding: 3px;
  }
`;

export const SelectOptionList = styled.ul`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;

  li {
    padding: 10px 20px;
    cursor: pointer;
    width: 100%;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;

    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.blue05};
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 9px;

  /* position:relative; */
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 16px;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.gray04};
  background: ${({ theme }) => theme.white};

  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.2px;
`;

export const TextCountParagraph = styled.p`
  width: 100%;
  text-align: right;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.gray02};
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 200px;
  width: 100%;
  padding: 10px 16px;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.gray04};
  background: ${({ theme }) => theme.white};

  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.2px;
  resize: none;
`;

const fileBoxCSS = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;

  cursor: pointer;
  border-radius: 7px;
  background: ${({ theme }) => theme.gray05};

  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.5px;

  color: ${({ theme }) => theme.gray02};
`;

export const FileUploaderContainer = styled.div`
  display: grid;
  grid-template-columns: fit-content(100%) 1fr;
  gap: 10px;
`;

export const FileLabel = styled.label`
  ${fileBoxCSS}

  svg {
    width: 28px;
    height: 28px;
  }
`;

export const FileList = styled.ol`
  display: flex;
  width: 100%;
  gap: 10px;
  flex-wrap: nowrap;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FileBox = styled.div<{ image: string }>`
  ${fileBoxCSS}
  padding: 8px;
  position: relative;
  background: url(${({ image }) => image}) ${({ theme }) => theme.gray07};
  background-position: center;
  background-size: cover;
  border: 1px solid ${({ theme }) => theme.gray05};

  p {
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    line-height: 16px;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.gary01};
  }

  &:hover::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;

    color: ${({ theme }) => theme.gray02};
    width: 20px;
    height: 20px;
    background: url(${xSvg});
    background-position: center;
  }
`;
