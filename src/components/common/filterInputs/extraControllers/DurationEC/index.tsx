import * as S from './style';

interface Props {
  filter: [number, number];
  setFilter: React.Dispatch<React.SetStateAction<[number, number]>>;
}

function HeadCountEC({ filter, setFilter }: Props) {
  const options: { text: string; value: [number, number] }[] = [
    {
      text: '당일치기(1일)',
      value: [1, 1],
    },
    {
      text: '단기여행(2~7일)',
      value: [2, 7],
    },
    {
      text: '중기여행(8~29일)',
      value: [8, 29],
    },
    {
      text: '장기여행(30일~)',
      value: [30, 100],
    },
  ];

  return (
    <S.List>
      {options.map((item) => (
        <S.Item>
          <S.CheckboxInput
            type="checkbox"
            id={item.text}
            checked={filter[0] === item.value[0] && filter[1] === item.value[1]}
            onChange={() => {
              setFilter(item.value);
            }}
          />
          <label htmlFor={item.text}>{item.text}</label>
        </S.Item>
      ))}
    </S.List>
  );
}

export default HeadCountEC;
