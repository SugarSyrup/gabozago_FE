import CircleXIcon from "../../assets/icons/circleX_white.svg?react";
import * as S from "../../styles/tripDetail/SelectedPlaceItem.style";

interface Props {
    name: string;
    thumbnail?: string;
    id: string;
    onDelete: (id:string) => void;
}

function SelectedPlaceItem({ id, name, thumbnail, onDelete }: Props) {
    return (
        <S.Container>
            <S.DeleteIcon onClick={() => {onDelete(id)}}>
                <CircleXIcon />
            </S.DeleteIcon>
            <S.Thumbnail>
                <img src={thumbnail} />
            </S.Thumbnail>
            <span>{name}</span>
        </S.Container>
    );
}

export default SelectedPlaceItem;
