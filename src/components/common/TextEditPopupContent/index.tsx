import * as S from './style';

interface Props {
  title: string;
  onSubmit: () => void;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  maxLength?: number;
}

function TextEditPopupContent({ title, onSubmit, value, setValue, maxLength = 100 }: Props) {
  console.log(title);
  console.log(value);
  return (
    <>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.SaveButton
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          저장
        </S.SaveButton>
      </S.Header>
      <S.TextInput
        type="text"
        maxLength={maxLength}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </>
  );
}

export default TextEditPopupContent;
