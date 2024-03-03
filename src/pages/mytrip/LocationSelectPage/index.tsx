import { useState } from "react";
import { useRecoilState } from "recoil";

import { selectedLocationsState } from "../../../recoil/mytrip/createData";

import {
    locations,
    extraLocations,
    locationType,
} from "../../../assets/data/locations";
import PageTemplate from "../../../components/common/PageTemplate";
import Button from "../../../components/common/Button";
import LocationTag from "../../../components/mytrip/LocationTag";
import BackButton from "../../../components/mytrip/BackButton";
import SearchedLocations from "../../../components/mytrip/SearchedLocations";

import useSearchInput from "../../../hooks/useSearchInput";

import * as S from "./style";
import { Heading } from "../../../components/common/Heading/style";

function MyTripLocationSelectPage() {
    const [selectedLocations, setSelectedLocations] = useRecoilState(
        selectedLocationsState
    );
    const [searchedLocations, setSearchedLocations] = useState<locationType[]>(
        []
    );
    const [isSearching, setIsSearching] = useState<boolean>(false);

    const [inputRef, SearchInput] = useSearchInput({
        placeholder: "어디로 떠나시나요?",
        onChange: onChange,
        backgroundColor:"white",
        borderColor:"#ADADAD"
    });

    function selectLocation(location: string) {
        setSelectedLocations((prev) =>{
            const addLocations = [...prev, location];
            return addLocations.filter((findLocation, index) => {
                return addLocations.indexOf(findLocation) === index;
            })
            }
        );
    }

    function deleteLocation(location: string) {
        setSelectedLocations((prev) =>
            prev.filter((item) => location !== item)
        );
    }

    function onChange() {
        if (inputRef.current) {
            if (inputRef.current?.value === "") {
                setIsSearching(false);
            } else {
                setIsSearching(true);
                setSearchedLocations(searchResult(inputRef.current?.value));
            }
        }
    }

    function searchResult(keyword: string) {
        return extraLocations.filter((location) =>
            location.name.includes(keyword)
        );
    }

    return (
        <PageTemplate nav={false}>
            <S.Header>
                <BackButton />
                <SearchInput />
            </S.Header>
            {isSearching ? (
                <SearchedLocations
                    searchedLocations={searchedLocations}
                    keyword={inputRef.current?.value}
                />
            ) : (
                <>
                    <S.LocationsHeader>
                        <Heading size="md">지역을 선택해주세요.</Heading>
                    </S.LocationsHeader>
                    <S.Locations>
                        {locations.map((location) => {
                            const isActive = selectedLocations.includes(
                                location.name
                            );
                            return (
                                <Button
                                    size="md"
                                    type="normal"
                                    active={isActive}
                                    onClick={() => {
                                        isActive
                                            ? deleteLocation(location.name)
                                            : selectLocation(location.name);
                                    }}
                                    key={location.name}
                                >
                                    {location.name}
                                </Button>
                            );
                        })}
                    </S.Locations>
                </>
            )}
            <S.Footer>
                <S.LocationTags>
                    {selectedLocations.map((selectedLocation) => (
                        <LocationTag
                            name={selectedLocation}
                            key={selectedLocation}
                            onClick={() => {
                                deleteLocation(selectedLocation);
                            }}
                        />
                    ))}
                </S.LocationTags>
                <Button
                    size="lg"
                    type="normal"
                    disabled={!(selectedLocations.length > 0)}
                    active={selectedLocations.length > 0}
                    width={"100%"}
                >
                    {selectLocation.length === 0 ? 
                        "지역을 선택해주세요." 
                        : 
                        `${selectedLocations.map((location) => " " + location)} 선택 완료`
                    }
                </Button>
            </S.Footer>
        </PageTemplate>
    );
}

export default MyTripLocationSelectPage;
