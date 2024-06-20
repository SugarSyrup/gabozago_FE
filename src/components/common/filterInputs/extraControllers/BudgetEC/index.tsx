import { ChangeEvent } from 'react';
import * as S from './style';

interface Props {
  filter: [number, number];
  setFilter: React.Dispatch<React.SetStateAction<[number, number]>>;
  step: number;
}

function BudgetEC({ filter, setFilter, step }: Props) {
  const min = 10000;
  const max = 9990000;

  const validateAndSetFilter = (value: number, type: 'min' | 'max') => {
    let newValue = value;

    if (value > max) {
      newValue = max;
    } else if (value < min) {
      newValue = min;
    }

    setFilter((prev) => {
      const newFilter = [...prev];
      const index = type === 'min' ? 0 : 1;
      newFilter[index] = newValue / 10000;
      return newFilter as [number, number];
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const truncatedValue = Math.trunc(Number(value) / 10000) * 10000;
    validateAndSetFilter(truncatedValue, id as 'min' | 'max');
  };

  return (
    <S.Container>
      <S.InputWrapper>
        <S.NumberInput
          id="min"
          min={min}
          max={max}
          type="number"
          step={step}
          value={filter[0] * 10000}
          onChange={handleInputChange}
          onBlur={handleInputChange}
        />
        <S.UnitSpan>원</S.UnitSpan>
      </S.InputWrapper>
      <S.MidSpan>~</S.MidSpan>
      <S.InputWrapper>
        <S.NumberInput
          id="max"
          min={min}
          max={max}
          type="number"
          step={step}
          value={filter[1] * 10000}
          onChange={handleInputChange}
          onBlur={handleInputChange}
        />
        <S.UnitSpan>원</S.UnitSpan>
      </S.InputWrapper>
    </S.Container>
  );
}

export default BudgetEC;
