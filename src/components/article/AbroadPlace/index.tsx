import MarketIcon from "../../../assets/icons/market.svg?react";

import * as S from "./style";

interface Props {
    imageURL: string,
    name: string,
    address: string,
}

function AbroadPlace({imageURL, name, address}: Props) {
    return(
        <S.Container>
                <img src={imageURL}/>
                <S.Infomation>
                    <S.TextContainer>
                        <S.Name>    
                            <MarketIcon />
                            <span>{name}</span>
                        </S.Name>
                        <S.Address>{address}</S.Address>
                    </S.TextContainer>
                </S.Infomation>            
        </S.Container>
    )
}

export default AbroadPlace;