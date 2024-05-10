import * as S from "./style";

interface Props {
    photoURL: string,
    name: string,
    division: string,
    desc: string,
}

function InterviewProfile({photoURL, name, division, desc}: Props){
    return(
        <S.Container>
            <S.Img src={photoURL} />
            <S.Infomation>
                <S.Name>{name}<S.Division>{division}</S.Division></S.Name>
                <S.Desc>{desc}</S.Desc>
            </S.Infomation>
        </S.Container>
    )
}
export default InterviewProfile;