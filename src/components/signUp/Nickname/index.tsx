import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import InputContainer from "../../common/InputContainer";
import { get } from "../../../utils/api";

import * as S from "./style";

interface Props {
  setIsNicknameOk: React.Dispatch<React.SetStateAction<boolean>>
}

function Nickname({setIsNicknameOk}: Props) {
    const [searchParams, setSearchParams] = useSearchParams();

    const [nickname, setNicknameState] = useState(searchParams.get("nickname"));
    const [nicknameAlert, setNicknameAlert] = useState("");

    useEffect(() => {
      get<{message: "POSSIBLE" | "IMPOSSIBLE"}>(`${import.meta.env.VITE_BASE_URL}user/nickname/${nickname}`)
        .then((res) => {
          if(res.data.message === "POSSIBLE") {
            setNicknameAlert(`사용 가능한 닉네임이에요!`);
            setIsNicknameOk(true);
          } else {
            setNicknameAlert(`사용 불가능한 닉네임이에요!`);
            setIsNicknameOk(false);
          }
        });
    }, [])

    return(
      <>
        
        <InputContainer
          inputType="text"
          name="nickname"
          label="닉네임"
          disabled={false}
          required={true}
          value={nickname ? nickname : ""}
          placeholder="닉네임을 입력하세요. (중복 불가)"
          alert={
            <S.AlertMessage color={nicknameAlert.length > 14 ? "red" : "blue"}>
              {nicknameAlert}
            </S.AlertMessage>
          }
          onInput={(e) => {
            setNicknameState(e.currentTarget.value);
            setNicknameAlert("");
            setIsNicknameOk(false);
          }}
          onButtonClick={() => {
            get<{message: "POSSIBLE" | "IMPOSSIBLE"}>(`${import.meta.env.VITE_BASE_URL}user/nickname/${nickname}`)
              .then((res) => {
                if(res.data.message === "POSSIBLE") {
                  setNicknameAlert(`사용 가능한 닉네임이에요!`)
                  setIsNicknameOk(true);
                } else {
                  setNicknameAlert(`사용 불가능한 닉네임이에요!`)
                  setIsNicknameOk(false);
                }
              });
          }}
        />
      </>
    )
}

export default Nickname;