import * as S from './style';

interface Props {
  filter: [number, number];
  setFilter: React.Dispatch<React.SetStateAction<[number, number]>>;
  max: number;
}

function HeadCountEC({ filter, setFilter, max }: Props) {
  const options: { text: string; value: [number, number] }[] = [
    {
      text: '1인',
      value: [1, 1],
    },
    {
      text: '2인',
      value: [2, 2],
    },
    {
      text: '3인',
      value: [3, 3],
    },
    {
      text: '4인',
      value: [4, 4],
    },
    {
      text: '5인+',
      value: [5, max],
    },
  ];
  return (
    <S.List>
      {options.map((item) => (
        <S.Button
          active={filter[0] === item.value[0] && filter[1] === item.value[1]}
          onClick={() => {
            setFilter(item.value);
          }}
        >
          {item.text}
        </S.Button>
      ))}
    </S.List>
  );
}

export default HeadCountEC;
