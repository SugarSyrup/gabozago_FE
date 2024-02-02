import * as S from "../../styles/mytrip/SearchResultItem.style";
import Button from "../common/Button";

interface Props {
    name: string;
    desc: string;
    keyword: string;
}

function SearchResultItem({ name, desc, keyword }: Props) {
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
            <Button size="xs" type="normal">
                선택
            </Button>
        </S.Container>
    );
}

export default SearchResultItem;
