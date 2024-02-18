import { useRecoilState } from "recoil";
import { PlaceType } from "../../assets/data/Places";
import SearchIcon from "../../assets/icons/search.svg?react";
import * as S from "../../styles/tripDetail/SearchPlaces.style";

import RecommendationListItem from "./RecommendationListItem";
import { selectedPlacesState } from "../../recoil/mytrip/selectedPlacesState";
import SelectedPlaceItem from "./SelectedPlaceItem";

interface Props {
    searchedPlaces: PlaceType[];
    keyword?: string;
}

function SearchPlaces({searchedPlaces, keyword}:Props) {
    const [selectedPlaces, setSelectedPlaces] = useRecoilState(selectedPlacesState);

    function onDelete(id: string) {
        setSelectedPlaces((prev) =>
            prev.filter((SelectedPlace) => SelectedPlace.id !== id)
        );
    }
    
    return(
        <>
            {
                (searchedPlaces.length !== 0) ?
                <S.SearchPlacesList>
                    {searchedPlaces.map(({name, theme, hearts, rating, id}) =>         
                            <RecommendationListItem name={name} hearts={hearts} theme={theme} rating={rating} id={id}/>
                    )}
                    <S.AddPlace>
                        <S.Explain>
                            <span>찾으시는 장소가 없나요?</span>
                            <span>직접 등록해보세요!</span>
                        </S.Explain>
                        <S.Button>새로운 장소 추가하기</S.Button>
                    </S.AddPlace>
                </S.SearchPlacesList>
                :
                <S.SearchedNotFounded>
                    <SearchIcon />
                    <S.Title>검색 결과가 없습니다.</S.Title>
                    <S.Desc>찾으시는 장소가 없나요?직접 등록해보세요!</S.Desc>
                    <S.Button>새로운 장소 추가하기</S.Button>
                </S.SearchedNotFounded>
            }
            <S.SelectedPlacesList>
                {selectedPlaces.map((selectedPlace, idx) => <SelectedPlaceItem name={selectedPlace.name} key={selectedPlace.id} id={selectedPlace.id} onDelete={onDelete} />)}
            </S.SelectedPlacesList>
        </>
    )
}

export default SearchPlaces;