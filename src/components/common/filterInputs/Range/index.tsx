import * as S from "./style";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

interface Props {
  filter: [number, number];
  setFilter: React.Dispatch<
    React.SetStateAction<[number, number] | [null, null]>
  >;
  name?: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  extraControlerComponent?: JSX.Element;
}

function Range({
  filter,
  setFilter,
  name = "",
  unit,
  min,
  max,
  step,
  extraControlerComponent = null,
}: Props) {
  const renderValue = () => {
    const value = [
      filter[0] !== null ? filter[0] : min,
      filter[1] !== null ? filter[1] : max,
    ];

    if (value[0] === min && value[1] === max) {
      return `전체${name}`;
    } else {
      if (value[1] === max) {
        return `${value[0]}${unit} 이상`;
      }
      if (value[0] === min) {
        return `${value[1]}${unit} 미만`;
      }
    }
    return `${value[0]}${unit} - ${value[1]}${unit}`;
  };

  return (
    <S.Container>
      <S.ValueParagraph>{renderValue()}</S.ValueParagraph>
      <S.InputContainer>
        <S.SliderLabel position={"left"}>{min + unit}</S.SliderLabel>
        <S.SliderLabel position={"right"}>{max + unit}</S.SliderLabel>
        <RangeSlider
          min={min}
          max={max}
          step={step}
          defaultValue={[min, max]}
          value={filter}
          onInput={setFilter}
        />
      </S.InputContainer>
      {extraControlerComponent && (
        <S.ExtraControlerContainer>
          {extraControlerComponent}
        </S.ExtraControlerContainer>
      )}
    </S.Container>
  );
}

export default Range;
