import PageTemplate from "../components/common/PageTemplate";
import useSearchInput from "../hooks/useSearchInput";
import LeftChevronIcon from "../assets/icons/leftChevron.svg?react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/pages/MyTripCreatePage.style";
import { Heading } from "../styles/common/Heading.style";
import Button from "../components/common/Button";

function MyTripCreatePage() {
    const navigate = useNavigate();
    const [, SearchInput] = useSearchInput({
        placeholder: "어디로 떠나시나요?",
        onSubmit: () => {},
    });

    return (
        <PageTemplate nav={false} header={false}>
            <S.Header>
                <LeftChevronIcon
                    onClick={() => {
                        navigate(-1);
                    }}
                />
                <SearchInput />
            </S.Header>
            <S.LocationsHeader>
                <Heading size="md">지역을 선택해주세요.</Heading>
            </S.LocationsHeader>
            <S.Locations>
                <Button size="md" type="normal">
                    부산
                </Button>
                <Button size="md" type="normal">
                    부산
                </Button>
                <Button size="md" type="normal">
                    부산
                </Button>
                <Button size="md" type="normal">
                    부산
                </Button>
                <Button size="md" type="normal">
                    부산
                </Button>
                <Button size="md" type="normal">
                    부산
                </Button>
            </S.Locations>
            <S.Footer>
                <Button size="lg" type="normal" disabled={true}>
                    지역을 선택해주세요.
                </Button>
            </S.Footer>
        </PageTemplate>
    );
}

export default MyTripCreatePage;
