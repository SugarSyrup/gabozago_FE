import { Link } from "react-router-dom";

import LocationIcon from "../../../../../assets/icons/location.svg?react";
import ThemeIcon from "../../../../../assets/icons/theme.svg?react";
import Typography from "../../../../common/Typography";

import * as S from "./style";

interface Props {
  data: {
    "id": number,
    "title": string,
    "videoId": string,
    "region": string[],
    "theme": string[],
    "views": number
  }[];
}

function ShortFormList({ data }: Props) {
  return (
    <S.List>
      {data.map(({ id, title, region, videoId, views, theme }) => (
        <S.ListItem>
          <Link to={`/journal/shortform/${id}`}>
            <S.Container>
              <S.ThumbnailImage src={'http://img.youtube.com/vi/' + videoId + '/oar2.jpg'} alt="" />
              <S.Views>
                <Typography.Label size="sm" color="white">조회수 {views}</Typography.Label>
              </S.Views>
              <S.InfoBox>
                <p>
                  <LocationIcon />
                  {region !== undefined ? region.map((item) => <Typography.Label size="md" color="white">{item}</Typography.Label>) : "-"}
                  <ThemeIcon />
                  {theme !== undefined ? theme.map((item) => <Typography.Label size="md" color="white">{item}</Typography.Label>) : "-"}
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
