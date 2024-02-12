import { useRecoilState } from "recoil";

import { selectedLocationsState } from "../../recoil/mytrip/createData";
import * as S from "../../styles/mytrip/SearchResultItem.style";

import Button from "../common/Button";

interface Props {
    name: string;
    desc: string;
    keyword: string;
}

function SearchResultItem({ name, desc, keyword }: Props) {
    const [selectedLocations, setSelectedLocations] = useRecoilState(
        selectedLocationsState
    );

    function selectLocation(location: string) {
        setSelectedLocations((prev) =>
            [location, ...prev].filter((findLocation, index) => {
                return [location, ...prev].indexOf(findLocation) === index;
            })
        );
    }

    function deleteLocation(location: string) {
        setSelectedLocations((prev) =>
            prev.filter((item) => location !== item)
        );
    }

    return (
        <S.Container>
            <S.Info>
                <S.Name>
                    {name.split("").map((word, index) => {
                        if (
                            name.indexOf(keyword) <= index &&
                            index < name.indexOf(keyword) + keyword.length
                        ) {
                            return <S.HighlightName>{keyword}</S.HighlightName>;
                        } else {
                            return <>{word}</>;
                        }
                    })}
                </S.Name>
                <S.Desc>{desc}</S.Desc>
            </S.Info>
            <Button
                size="xs"
                type="normal"
                active={selectedLocations.includes(name)}
                onClick={() => {
                    selectedLocations.includes(name)
                        ? deleteLocation(name)
                        : selectLocation(name);
                }}
            >
                선택
            </Button>
        </S.Container>
    );
}

export default SearchResultItem;
