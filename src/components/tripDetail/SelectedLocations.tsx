import * as S from "../../styles/tripDetail/SelectedPlaces.style";
import SelectedPlaceItem from "./SelectedPlaceItem";

import { useRecoilState } from "recoil";
import { selectedPlacesState } from "../../recoil/mytrip/selectedPlacesState";
import Button from "../common/Button";
import { useEffect, useState } from "react";

function SelectedPlaces() {
    const [ selectedPlaces, setSelectedPlaces] = useRecoilState(selectedPlacesState);
    const [ hasSelectedPlaces, setHasSelectedPlaces ] = useState<boolean>(false); 

    function onDelete(id: string) {
        setSelectedPlaces((prev) =>
            prev.filter((SelectedPlace) => SelectedPlace.id !== id)
        );
    }

    useEffect(() => {
        if(selectedPlaces.length === 0) {
            setHasSelectedPlaces(false)
        } else {
            setHasSelectedPlaces(true)
        }
    }, [selectedPlaces])

    return (
        <>
            <S.Container>
                {
                    selectedPlaces.map((selectedPlace, idx) => <SelectedPlaceItem name={selectedPlace.name} key={selectedPlace.id} id={selectedPlace.id} onDelete={onDelete} />)
                }
            </S.Container>
            <Button size="lg" type="normal" disabled={!hasSelectedPlaces} active={hasSelectedPlaces}>
                {hasSelectedPlaces ? "장소 선택 완료" : "장소를 선택해주세요" }
            </Button>
        </>
    );
}

export default SelectedPlaces;
