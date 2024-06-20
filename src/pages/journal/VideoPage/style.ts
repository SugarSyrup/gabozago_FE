import styled from 'styled-components'

export const PageContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: grid;
  grid-template-rows: 1fr fit-content(100%);
  margin: auto;
  max-width: 500px;
  width: 100%;
  height: 100dvh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }

  overflow: auto;

  background-color: ${({ theme }) => theme.gray06};
`

export const VideoWrapper = styled.div`
  width: 100%;
  height: 340px;

  background-color: ${({ theme }) => theme.gray03};
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
`

export const Header = styled.header`
  position: relative;

  width: 100%;
  padding-top: 340px;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  flex-direction: column;

  padding-bottom: 25px;

  background-color: white;
`

export const Type = styled.span`
  color: ${({ theme }) => theme.gray01};
  font-size: 13px;
  font-weight: 400;
  line-height: 28px;
  margin-top: 95px;
`

export const Title = styled.div`
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-size: 18px;
  font-weight: 600;
`

export const UserContainer = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  align-items: center;

  margin-top: 20px;

  svg {
    width: 40px;
    height: 40px;
  }
`

export const AvatarImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`

export const UserInfo = styled.div`
  margin-left: 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`

export const FollowBtnWrapper = styled.div`
  position: absolute;
  right: 8px;

  svg {
    width: 12px;
    height: 12px;
  }
`

export const Name = styled.span`
  font-size: 14px;
  font-weight: 600;
`

export const Date = styled.span`
  color: ${({ theme }) => theme.gray01};
  font-size: 12px;
`

export const Contents = styled.div`
  margin-top: 14px;

  background-color: white;
  padding-top: 14px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 36px;
`

export const Explain = styled.span`
  display: inline-block;
  margin-top: 16px;

  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
`

export const PlaceBtns = styled.div`
  width: 100%;
  margin-top: 24px;

  display: flex;
  gap: 10px;
  align-items: center;
`

export const PlaceBtn = styled.div`
  width: 100%;
  padding: 8px 0px;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.gray05};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  svg {
    width: 18px;
    height: 18px;

    path {
      fill: ${({ theme }) => theme.gray01};
    }
  }

  span {
    color: ${({ theme }) => theme.gray};
    font-size: 11px;
    font-weight: 400;
    line-height: 21.588px;
  }
`

export const SubTitle = styled.span`
  display: inline-block;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 6px;

  font-size: 16px;
  font-weight: 600;
  line-height: 21.588px;
`

export const SubTitleDesc = styled.span`
  color: ${({ theme }) => theme.main};
  font-size: 13px;
  line-height: 21.588px;
  margin-bottom: 6px;
`
