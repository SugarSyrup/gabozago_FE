import * as S from "./style";
import { Link } from "react-router-dom";
import LocationIcon from "../../../../../assets/icons/location.svg?react";
import ThemeIcon from "../../../../../assets/icons/theme.svg?react";
import Typography from "../../../../common/Typography";

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
          <Link to={`/journal/shortform/${id}`}>
            <S.Container>
              <S.ThumbnailImage src={thumbnail} alt="" />
              <S.Views>
                <Typography.Label size="sm" color="white">조회수 210</Typography.Label>
              </S.Views>
              <S.InfoBox>
                <p>
                  <LocationIcon />
                  <Typography.Label size="md" color="white">{location ? location : "-"}</Typography.Label>
                  <ThemeIcon />
                  <Typography.Label size="md" color="white">도보여행</Typography.Label>
                </p>
                <Typography.Title size="sm" color="white">{title}</Typography.Title>
              </S.InfoBox>
            </S.Container>
          </Link>
        </S.ListItem>
      ))}
    </S.List>
  );
}

export default ShortFormList;
