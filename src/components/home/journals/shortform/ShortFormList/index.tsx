import { Link } from "react-router-dom";

import LocationIcon from "../../../../../assets/icons/location.svg?react";
import ThemeIcon from "../../../../../assets/icons/theme.svg?react";
import Typography from "../../../../common/Typography";

import * as S from "./style";
import { useEffect } from "react";

export interface ShortForm {
  id: number;
  title: string;
  videoId: string;
  location: string[];
  theme: string[];
  views: number;
}

interface Props {
  data: ShortForm[];
}

function ShortFormList({ data }: Props) {
  useEffect(() => {
    console.log("ShortFormList");
    console.log(data);
  }, [])
  return (
    <S.List>
      {data && data.map(({ id, title, location, views, theme, videoId }) => (
        <S.ListItem key={id}>
          <Link to={`/journal/shortform/${id}`}>
            <S.Container>
              <S.ThumbnailImage
                src={"http://img.youtube.com/vi/" + videoId + "/oar2.jpg"}
                alt=""
              />
              <S.Views>
                <Typography.Label size="sm" color="white">
                  조회수 {views}
                </Typography.Label>
              </S.Views>
              <S.InfoBox>
                <p>
                  <LocationIcon />
                  {location !== undefined
                    ? location.map((item) => (
                        <Typography.Label
                          size="md"
                          color="white"
                          key={id + item}
                        >
                          {item}
                        </Typography.Label>
                      ))
                    : "-"}
                  <ThemeIcon />
                  {theme !== undefined
                    ? theme.map((item) => (
                        <Typography.Label
                          size="md"
                          color="white"
                          key={id + item}
                        >
                          {item}
                        </Typography.Label>
                      ))
                    : "-"}
                </p>
                <Typography.Title size="sm" color="white">
                  {title}
                </Typography.Title>
              </S.InfoBox>
            </S.Container>
          </Link>
        </S.ListItem>
      ))}
    </S.List>
  );
}

export default ShortFormList;
