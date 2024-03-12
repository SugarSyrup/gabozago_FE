import * as S from "./style";
import { Link } from "react-router-dom";
import KebabMenuIcon from "../../../../../assets/icons/menu_kebab.svg?react";
import LocationIcon from "../../../../../assets/icons/location.svg?react";

interface Props {
  data: {
    id: number;
    title: string;
    location: string;
    thumbnail: string;
  }[];
}

function ShortFormList({ data }: Props) {
  return (
    <S.List>
      {data.map(({ id, title, location, thumbnail }) => (
        <S.ListItem>
          <Link to={`/shortform/${id}`}>
            <S.Container>
              <S.ThumbnailImage src={thumbnail} alt="" />
              <S.MenuButton>
                <KebabMenuIcon />
              </S.MenuButton>
              <S.InfoBox>
                <p>
                  <LocationIcon />
                  {location ? location : "-"}
                </p>
                <p>{title}</p>
              </S.InfoBox>
            </S.Container>
          </Link>
        </S.ListItem>
      ))}
    </S.List>
  );
}

export default ShortFormList;
