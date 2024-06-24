import { useRecoilState } from 'recoil';

import { selectedLocationsState } from '../../../recoil/mytrip/createData';
import Typography from '../../common/Typography';

import * as S from './style';

interface Props {
  name: string;
  desc: string;
  keyword: string;
}

function SearchResultItem({ name, desc, keyword }: Props) {
  const [selectedLocations, setSelectedLocations] = useRecoilState(selectedLocationsState);

  function selectLocation(location: string) {
    setSelectedLocations((prev) =>
      [location, ...prev].filter(
        (findLocation, index) => [location, ...prev].indexOf(findLocation) === index,
      ),
    );
  }

  function deleteLocation(location: string) {
    setSelectedLocations((prev) => prev.filter((item) => location !== item));
  }

  return (
    <S.Container>
      <S.Info>
        <S.Name>
          {name.split('').map((word, index) => {
            if (name.indexOf(keyword) <= index && index < name.indexOf(keyword) + keyword.length) {
              return <S.HighlightName>{word}</S.HighlightName>;
            }
            return <>{word}</>;
          })}
        </S.Name>
        <S.Desc>{desc}</S.Desc>
      </S.Info>
      <S.LocationSelectButton
        isActive={selectedLocations.includes(name)}
        onClick={() => {
          selectedLocations.includes(name) ? deleteLocation(name) : selectLocation(name);
        }}
      >
        <Typography.Label size="lg" color="inherit">
          선택
        </Typography.Label>
      </S.LocationSelectButton>
    </S.Container>
  );
}

export default SearchResultItem;
