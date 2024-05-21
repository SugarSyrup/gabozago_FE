import { useState } from "react";

import InputContainer from "../../common/InputContainer";
import { get } from "../../../utils/api";

import * as S from "./style";

function RecommendNickname() {
    const [recommend, setRecommend] = useState("");
    const [recommendAlert, setRecommendAlert] = useState("");

    return(
        <InputContainer
          inputType="text"
          name="reccomendName"
          label={
            <>
              추천받고 오셨다면 알려주세요!
              <S.InputExplain>(선택)</S.InputExplain>
            </>
          }
          disabled={false}
          required={false}
          placeholder="추천인 닉네임 입력"
          alert={
            <S.AlertMessage color={recommendAlert.length > 13 ? "red" : "blue"}>
              {recommendAlert}
            </S.AlertMessage>
          }
          onInput={(e) => {
            setRecommend(e.currentTarget.value);
            setRecommendAlert("");
          }}
          onButtonClick={() => {
            get<{message: "POSSIBLE" | "IMPOSSIBLE"}>(`/user/nickname/${recommend}`)
              .then((res) => {
                if(res.data.message === "POSSIBLE") {
                  setRecommendAlert(`유효하지 않은 유저입니다.`)
                } else {
                  setRecommendAlert(`추천 가능한 유저입니다.`)
                }
              });
          }}
        />
    )
}

export default RecommendNickname;