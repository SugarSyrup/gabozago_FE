import { Dispatch } from 'react'

import * as S from './style'

interface Props {
  setActFilter: Dispatch<React.SetStateAction<'clap' | 'comment'>>
  setPostFilter: Dispatch<React.SetStateAction<'short-form' | 'article'>>
}

function UserActivityFilter({ setActFilter, setPostFilter }: Props) {
  return (
    <S.FilterList>
      <S.FilterItem
        onInput={e => {
          setActFilter(e.currentTarget.value as 'clap' | 'comment')
        }}
      >
        <option value="clap">공감한 글</option>
        <option value="comment">댓글 단 글</option>
      </S.FilterItem>
      <S.FilterItem
        onInput={e => {
          setPostFilter(e.currentTarget.value as 'short-form' | 'article')
        }}
      >
        <option value="article">아티클</option>
        <option value="short-form">숏폼</option>
      </S.FilterItem>
    </S.FilterList>
  )
}

export default UserActivityFilter
