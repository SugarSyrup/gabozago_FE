import { useEffect, useRef, useState } from 'react'

import * as S from './style'

import UserActivityFilter from '../UserActivityFilter'
import UserClapsPostList from '../UserClapsPostList'
import UserCommentsList from '../UserCommentsList'

import { get, post } from '../../../utils/api'

export interface articleResponseType {
  next: string | null
  previous: string | null
  results: {
    id: number
    title: string
    nickname: string
    avatarURL: string
    thumbnailURL: string
    clapCount: number
    commentCount: number
  }[]
}

export interface shortsResponseType {
  next: string | null
  previous: string | null
  results: {
    id: number
    title: string
    nickname: string
    avatarURL: string
    videoId: string
    clapCount: number
    commentCount: number
  }[]
}

export interface commentsResponseType {
  next: string | null
  previous: string | null
  results: {
    id: number
    comment: string
    title: string
  }[]
}

function UserActivity() {
  const [actFilter, setActFilter] = useState<'clap' | 'comment'>('clap')
  const [postFilter, setPostFilter] = useState<'short-form' | 'article'>(
    'article'
  )
  const [next, setNext] = useState<string | null>(null)
  const [data, setData] = useState<
    | articleResponseType['results']
    | shortsResponseType['results']
    | commentsResponseType['results']
  >([])

  const dataContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (actFilter === 'clap' && postFilter === 'short-form') {
      get<shortsResponseType>(
        `/user/profile/my-activity?sort=${actFilter}&community=${postFilter}`
      ).then(response => {
        setData(response.data.results)
        setNext(response.data.next)
      })
    } else if (actFilter === 'clap' && postFilter === 'article') {
      get<articleResponseType>(
        `/user/profile/my-activity?sort=${actFilter}&community=${postFilter}`
      ).then(response => {
        setData(response.data.results)
        setNext(response.data.next)
      })
    } else {
      get<commentsResponseType>(
        `/user/profile/my-activity?sort=${actFilter}&community=${postFilter}`
      ).then(response => {
        setData(response.data.results)
        setNext(response.data.next)
      })
    }
  }, [actFilter, postFilter])

  useEffect(() => {
    let observer = new IntersectionObserver(() => {})

    if (dataContainerRef.current) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && next) {
          if (actFilter === 'clap' && postFilter === 'short-form') {
            get<shortsResponseType>(next).then(response => {
              setData(prev => {
                const prevData = prev as shortsResponseType['results']
                return [...prevData, ...response.data.results]
              })
              setNext(response.data.next)
            })
          } else if (actFilter === 'clap' && postFilter === 'article') {
            get<articleResponseType>(next).then(response => {
              setData(prev => {
                const prevData = prev as articleResponseType['results']
                return [...prevData, ...response.data.results]
              })
              setNext(response.data.next)
            })
          } else {
            get<commentsResponseType>(next).then(response => {
              setData(prev => {
                const prevData = prev as commentsResponseType['results']
                return [...prevData, ...response.data.results]
              })
              setNext(response.data.next)
            })
          }
        }
      })

      observer.observe(dataContainerRef.current)
    }

    return () => {
      observer && observer.disconnect()
    }
  }, [next, dataContainerRef])

  return (
    <S.Container>
      <UserActivityFilter
        setActFilter={setActFilter}
        setPostFilter={setPostFilter}
      />
      {data !== undefined && actFilter === 'clap' ? (
        postFilter === 'short-form' ? (
          <UserClapsPostList
            data={data as shortsResponseType['results']}
            type="short-form"
          />
        ) : (
          <UserClapsPostList
            data={data as articleResponseType['results']}
            type="article"
          />
        )
      ) : (
        data !== undefined && (
          <UserCommentsList
            data={data as commentsResponseType['results']}
            type={postFilter}
          />
        )
      )}

      <div ref={dataContainerRef} />
    </S.Container>
  )
}

export default UserActivity
