import RangeSlider from 'react-range-slider-input';
import * as S from './style';
import 'react-range-slider-input/dist/style.css';
import { RangeOptions } from '../../../../assets/types/FilterTypes';

export interface Props extends RangeOptions {
  filter: [number, number];
  setFilter: React.Dispatch<React.SetStateAction<[number, number] | [null, null]>>;
}

function Range({
  filter,
  setFilter,
  name = '',
  unit,
  min,
  max,
  step,
  extraControlerComponent = null,
}: Props) {
  const renderValue = () => {
    const value = [filter[0] !== null ? filter[0] : min, filter[1] !== null ? filter[1] : max];

    if (value[0] === min && value[1] === max) {
      return `전체${name}`;
    }
    if (value[0] === value[1]) {
      return `${value[0]}${unit}`;
    }
    if (value[1] === max) {
      return `${value[0]}${unit} 이상`;
    }
    if (value[0] === min) {
      return `${value[1]}${unit} 미만`;
    }

    return `${value[0]}${unit} - ${value[1]}${unit}`;
  };

  return (
    <>
      <S.Container>
        <S.ValueParagraph>{renderValue()}</S.ValueParagraph>
        <S.InputContainer>
          <S.SliderLabel position="left">{min + unit}</S.SliderLabel>
          <S.SliderLabel position="right">{max + unit}</S.SliderLabel>
          <RangeSlider
            min={min}
            max={max}
            step={step}
            defaultValue={[min, max]}
            value={filter}
            onInput={setFilter}
          />
        </S.InputContainer>
      </S.Container>
      {extraControlerComponent && (
        <S.ExtraControlerContainer>{extraControlerComponent}</S.ExtraControlerContainer>
      )}
    </>
  );
}

export default Range;
