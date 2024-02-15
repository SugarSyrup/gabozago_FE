import CircleXIcon from "../../assets/icons/circleX_white.svg?react";
import * as S from "../../styles/tripDetail/SelectedLocationItem.style";

interface Props {
    name: string;
    thumbnail?: string;
}

function SelectedLocationItem({ name, thumbnail }: Props) {
    return (
        <S.Container>
            <S.DeleteIcon>
                <CircleXIcon />
            </S.DeleteIcon>
            <S.Thumbnail>
                <img src={thumbnail} />
            </S.Thumbnail>
            <span>{name}</span>
        </S.Container>
    );
}

export default SelectedLocationItem;
